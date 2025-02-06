import os
import shutil
from PIL import Image
import numpy as np
from sklearn.metrics.pairwise import cosine_similarity
import imagehash
from pathlib import Path

def load_image(image_path):
    """Load and preprocess image."""
    try:
        img = Image.open(image_path)
        # Convert to grayscale to focus on structural similarity
        img = img.convert('L')
        # Resize to standard size to ensure consistent comparison
        img = img.resize((256, 256))
        return img
    except Exception as e:
        print(f"Error loading image {image_path}: {e}")
        return None

def get_image_features(img):
    """Extract features from image using perceptual hash."""
    if img is None:
        return None
    try:
        # Use average hash for structural similarity
        hash = imagehash.average_hash(img)
        return hash
    except Exception as e:
        print(f"Error extracting features: {e}")
        return None

def are_images_similar(hash1, hash2, threshold=5):
    """Compare two images using their hash difference."""
    if hash1 is None or hash2 is None:
        return False
    # Calculate hash difference
    difference = hash1 - hash2
    return difference <= threshold

def find_unique_images(input_folder, output_folder, similarity_threshold=5):
    """Find and move unique images to output folder."""
    # Create output folder if it doesn't exist
    Path(output_folder).mkdir(parents=True, exist_ok=True)
    
    # Get all image files
    image_files = [f for f in os.listdir(input_folder) 
                  if f.lower().endswith(('.png', '.jpg', '.jpeg', '.tiff', '.bmp'))]
    
    print(f"Processing {len(image_files)} images...")
    
    # Store image hashes
    image_hashes = []
    unique_images = []
    
    # Process each image
    for idx, img_file in enumerate(image_files):
        if idx % 100 == 0:
            print(f"Processed {idx}/{len(image_files)} images...")
            
        img_path = os.path.join(input_folder, img_file)
        img = load_image(img_path)
        
        if img is None:
            continue
            
        current_hash = get_image_features(img)
        
        if current_hash is None:
            continue
            
        # Check if this image is similar to any previously processed images
        is_unique = True
        for prev_hash in image_hashes:
            if are_images_similar(current_hash, prev_hash, similarity_threshold):
                is_unique = False
                break
                
        if is_unique:
            unique_images.append(img_file)
            image_hashes.append(current_hash)
    
    # Move unique images to output folder
    print(f"\nFound {len(unique_images)} unique images. Moving them to output folder...")
    
    for unique_img in unique_images:
        src_path = os.path.join(input_folder, unique_img)
        dst_path = os.path.join(output_folder, unique_img)
        shutil.copy2(src_path, dst_path)
    
    print("Done!")
    return len(unique_images)

if __name__ == "__main__":
    # Set your input and output folders
    input_folder = "D:\AI-ML\MODA\entity-extraction-v1\dataset\first_pages"
    output_folder = "D:\AI-ML\MODA\entity-extraction-v1\dataset\unique_first_pages"
    
    # Adjust similarity threshold if needed (lower = more strict, higher = more lenient)
    similarity_threshold = 5
    
    # Process images
    num_unique = find_unique_images(input_folder, output_folder, similarity_threshold)
    print(f"Successfully moved {num_unique} unique images to {output_folder}")