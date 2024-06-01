import pyautogui
import time

# Add a delay to give you time to focus the cursor on the input field
time.sleep(5)

for i in range(999):
    # Type "ailo"
    pyautogui.typewrite("ailo")
    
    # Press the "enter" key to simulate clicking the send button
    pyautogui.press("enter")
    
    # Add a short delay to avoid overwhelming the system
    time.sleep(0.001)
