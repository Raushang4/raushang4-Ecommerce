import subprocess
import os

common_paths = [
    "/usr/local/bin/gcloud",
    "/opt/homebrew/bin/gcloud",
    "/Users/raushang4/google-cloud-sdk/bin/gcloud",
    "/Users/raushang4/google-cloud-sdk-latest/bin/gcloud",
    "/usr/bin/gcloud",
    "/bin/gcloud",
    "/opt/google-cloud-sdk/bin/gcloud",
    "/usr/local/Caskroom/google-cloud-sdk/latest/google-cloud-sdk/bin/gcloud"
]

def find_gcloud():
    for path in common_paths:
        if os.path.exists(path):
            return path
    
    # Try using 'which' in a shell
    try:
        res = subprocess.run(["which", "gcloud"], capture_output=True, text=True, shell=True)
        if res.stdout.strip():
            return res.stdout.strip()
    except:
        pass
    
    return None

gcloud_path = find_gcloud()
if gcloud_path:
    print(f"FOUND:{gcloud_path}")
else:
    print("NOT_FOUND")
