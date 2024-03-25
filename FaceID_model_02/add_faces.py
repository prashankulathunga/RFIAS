import cv2
import os

# Create a directory to store the images if it doesn't exist
if not os.path.exists('faces'):
    os.makedirs('faces')

# Start video capture
video = cv2.VideoCapture(0)

# Load pre-trained face detection model
face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')

# Prompt user to input their name
name = input("Enter Your Name: ")

# Initialize variables
num_images = 0

# Main loop to capture and save images
while num_images < 200:
    ret, frame = video.read()
    
    # Flip the frame horizontally
    frame = cv2.flip(frame, 1)
    
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    
    # Detect faces
    faces = face_cascade.detectMultiScale(gray, scaleFactor=1.3, minNeighbors=5)
    
    # Process each detected face
    for (x, y, w, h) in faces:
        # Crop face region
        face = gray[y:y+h, x:x+w]
        
        # Save face image with unique filename
        filename = f"faces/{name}_{num_images}.jpg"
        cv2.imwrite(filename, face)
        
        # Display image with bounding box around the face and counter
        cv2.rectangle(frame, (x, y), (x+w, y+h), (255, 0, 0), 2)
        cv2.putText(frame, f'Images: {num_images}', (50, 50), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2)
        cv2.imshow('Capturing Images', frame)
        
        num_images += 1
    
    # Break the loop if 'q' is pressed or required number of images captured
    if cv2.waitKey(1) & 0xFF == ord('q') or num_images == 200:
        break

# Release video capture and close window
video.release()
cv2.destroyAllWindows()

print(f"{num_images} images captured and saved for {name}.")
