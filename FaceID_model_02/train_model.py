import os
import numpy as np
from keras.preprocessing.image import load_img, img_to_array
from keras.applications import VGG16
from keras.models import Model
from keras.layers import Flatten, Dense
from keras.optimizers import Adam
from keras.callbacks import ModelCheckpoint
from keras_vggface.utils import preprocess_input



# Function to load and preprocess images
def preprocess_images(directory):
    images = []
    labels = []
    label_mapping = {}  # Dictionary to map string labels to integer labels
    label_counter = 0

    for filename in os.listdir(directory):
        if filename.endswith('.jpg'):
            label = filename.split('_')[0]  # Extract label from filename
            if label not in label_mapping:
                label_mapping[label] = label_counter
                label_counter += 1
            img = load_img(os.path.join(directory, filename), target_size=(224, 224))
            img_array = img_to_array(img)
            img_array = preprocess_input(img_array)
            images.append(img_array)
            labels.append(label_mapping[label])

    return np.array(images), np.array(labels)


# Load preprocessed images
X_train, y_train = preprocess_images('faces')

# Load pre-trained VGGFace model without top classification layer

base_model = VGG16(weights=r"D:\Projects\Python\Py 4 Data Sciense\Self\Vgg16\rcmalli_vggface_tf_notop_vgg16.h5", include_top=False, input_shape=(224, 224, 3))

# Add custom fully connected layers for face recognition
x = Flatten()(base_model.output)
x = Dense(512, activation='relu')(x)
predictions = Dense(1, activation='sigmoid')(x)

# Create the final model
model = Model(inputs=base_model.input, outputs=predictions)

# Compile the model
model.compile(optimizer=Adam(lr=0.001), loss='binary_crossentropy', metrics=['accuracy'])

# Train the model
checkpoint = ModelCheckpoint('trained_model.h5', monitor='val_loss', save_best_only=True)
model.fit(X_train, y_train, batch_size=32, epochs=10, validation_split=0.2, callbacks=[checkpoint])

# Save the trained model
model.save('trained_model')
