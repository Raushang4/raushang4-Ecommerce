import subprocess
import json
import urllib.request
import os

def get_token():
    result = subprocess.run(['gcloud', 'auth', 'print-access-token'], capture_output=True, text=True)
    return result.stdout.strip()

def make_request(url, token):
    req = urllib.request.Request(url)
    req.add_header('Authorization', f'Bearer {token}')
    with urllib.request.urlopen(req) as response:
        return json.loads(response.read().decode())

def main():
    token = get_token()
    
    print("--- GOOGLE ANALYTICS ACCOUNTS ---")
    accounts = make_request("https://analyticsadmin.googleapis.com/v1beta/accounts", token)
    
    if 'accounts' not in accounts:
        print("No accounts found.")
        return

    for account in accounts['accounts']:
        acc_name = account['name']
        print(f"Account: {account['displayName']} ({acc_name})")
        
        # List properties for each account
        properties = make_request(f"https://analyticsadmin.googleapis.com/v1beta/properties?filter=parent:{acc_name}", token)
        if 'properties' in properties:
            for prop in properties['properties']:
                print(f"  -> Property: {prop['displayName']} ({prop['name']})")

if __name__ == "__main__":
    main()
