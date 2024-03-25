import cv2
import numpy as np
import os
import mysql.connector

# Connect to MySQL server
conn = mysql.connector.connect(
    host="localhost",
    user="root",  # Replace with your MySQL username
    password="",  # Replace with your MySQL password
    database="facedb"
)

# Create database cursor
cursor = conn.cursor()

# Load pre-trained face detection model
facedetect = cv2.CascadeClassifier('data/haarcascade_frontalface_default.xml')

# Start video capture
video = cv2.VideoCapture(0)

# Initialize variables
faces_data = []
labels = []
i = 0

# Prompt user to input their name
name = input("Enter Your Name: ")

# Main loop to capture and process images
while True:
    ret, frame = video.read()
    frame = cv2.flip(frame, 1)  # Flip horizontally
    
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    
    # Detect faces
    faces = facedetect.detectMultiScale(gray, 1.3, 5)
    
    # Process each detected face
    for (x, y, w, h) in faces:
        crop_img = gray[y:y+h, x:x+w]
        resized_img = cv2.resize(crop_img, (50, 50))
        
        # Store the detected face
        if len(faces_data) <= 100 and i % 10 == 0:
            faces_data.append(resized_img)
            labels.append(name)  # Store label (name) corresponding to the face image
            
            # Insert face data into MySQL database
            insert_query = "INSERT INTO faces (name, file_path) VALUES (%s, %s)"
            values = (name, f"data/{name}_{len(faces_data)}.jpg")
            cursor.execute(insert_query, values)
            conn.commit()
            
            # Save face image
            cv2.imwrite(f"data/{name}_{len(faces_data)}.jpg", resized_img)
        
        i += 1
        cv2.putText(frame, str(len(faces_data)), (50, 50), cv2.FONT_HERSHEY_COMPLEX, 1, (50, 50, 255), 1)
        cv2.rectangle(frame, (x, y), (x+w, y+h), (50, 50, 255), 1)
    
    cv2.imshow("Frame", frame)
    k = cv2.waitKey(1)
    
    if k == ord('q') or len(faces_data) == 100:
        break

# Release video capture and close window
video.release()
cv2.destroyAllWindows()

# Close cursor and connection
cursor.close()
conn.close()

# Convert labels to numerical IDs
label_ids = {name: idx for idx, name in enumerate(set(labels))}

# Convert faces_data to numpy array
faces_data = np.array(faces_data)

# Train face recognizer model (LBPH)
face_recognizer = cv2.face.LBPHFaceRecognizer_create()
face_recognizer.train(faces_data, np.array([label_ids[name] for name in labels]))

# Save the trained model to file
face_recognizer.save('lbph_trained_model.xml')

print("Face data captured, stored, and model trained successfully.")
