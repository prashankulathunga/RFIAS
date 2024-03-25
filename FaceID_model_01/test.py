import cv2
import numpy as np
import mysql.connector
from datetime import datetime
from win32com.client import Dispatch

def speak(text):
    speaker = Dispatch("SAPI.SpVoice")
    speaker.Speak(text)

# Connect to MySQL database
db_connection = mysql.connector.connect(
    host="localhost",
    user="root",
    password="",
    database="facedb"
)

cursor = db_connection.cursor()

# Load pre-trained face recognition model
recognizer = cv2.face.LBPHFaceRecognizer_create()

# Load the LBPH face recognizer model from file with error handling
try:
    recognizer.read('lbph_trained_model.xml')
except cv2.error as e:
    print(f"Error loading LBPH recognizer: {e}")
    exit(1)  # Exit the script if there's an error loading the recognizer

# Load Haar cascade classifier for face detection
face_cascade = cv2.CascadeClassifier('data/haarcascade_frontalface_default.xml')

# Dictionary to store recognized faces and their attendance status
recognized_faces = {}

# Capture video from webcam
video = cv2.VideoCapture(0)

while True:
    ret, frame = video.read()
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    
    # Detect faces in the frame
    faces = face_cascade.detectMultiScale(gray, scaleFactor=1.3, minNeighbors=5)
    
    # Process each detected face
    for (x, y, w, h) in faces:
        # Recognize the face using the trained model
        id_, confidence = recognizer.predict(gray[y:y+h, x:x+w])
        
        # Print confidence value for each recognized face
        print(f"Confidence: {confidence}")
        
        # If confidence is low, it means the face is not recognized
        if confidence >= 45 and confidence <= 85:
            # Fetch name from the database based on id
            query_name = "SELECT name FROM faces WHERE id = %s"
            cursor.execute(query_name, (id_,))
            result = cursor.fetchone()
            if result:
                name = result[0]
                
                # Mark attendance if the face is recognized for the first time
                if name not in recognized_faces:
                    ts = datetime.now().strftime("%H:%M:%S")
                    date = datetime.now().strftime("%Y-%m-%d")
                    recognized_faces[name] = True
                    
                    # Insert attendance record into the database
                    query_attendance = "INSERT INTO attendance (name, time, date) VALUES (%s, %s, %s)"
                    cursor.execute(query_attendance, (name, ts, date))
                    db_connection.commit()
                    
                    # Speak the attendance
                    speak(f"Attendance marked for {name}")
            else:
                print("Face not found in the database")

        # Draw rectangle around the face
        cv2.rectangle(frame, (x, y), (x+w, y+h), (255, 0, 0), 2)

        
    cv2.imshow('Frame', frame)
    
    if cv2.waitKey(20) & 0xFF == ord('q'):
        break

video.release()
cv2.destroyAllWindows()
cursor.close()
db_connection.close()
