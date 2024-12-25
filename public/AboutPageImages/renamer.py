import os

current_directory = os.path.dirname(os.path.abspath(__file__))

files = os.listdir(current_directory)

jpg_files = [file for file in files if file.lower().endswith('.jpg')]

for index, file_name in enumerate(jpg_files, start=1):
    new_name = f"Img{index}.jpg"
    old_path = os.path.join(current_directory, file_name)
    new_path = os.path.join(current_directory, new_name)
    os.rename(old_path, new_path)
    print(f"Renamed: {file_name} -> {new_name}")

print("All images have been renamed.")
