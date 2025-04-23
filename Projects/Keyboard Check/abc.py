try:
    import tkinter as tk
    from tkinter import messagebox
except ImportError:
    print("Error: Tkinter is not installed. Please install it and try again.")
    raise SystemExit(1)

import subprocess

def run_command(option):
    """
    Opens a command prompt, runs a specific command based on the option chosen or custom input,
    and keeps the terminal open.
    """
    commands = {
        '1': 'dir',  # Equivalent to 'ls -l' in Linux
        '2': 'cd',    # Equivalent to 'pwd' in Linux
        '3': 'date /T & time /T',
        '4': 'systeminfo',
        '5': 'net stats srv',
        '6': 'whoami /all'
    }
    
    try:
        cmd = commands.get(option, option)  # Get command or treat as custom input
        subprocess.Popen(["cmd", "/k", cmd])  # Opens a new cmd window and runs the command
        root.quit()
    except Exception as e:
        messagebox.showerror("Error", f"Failed to execute command: {str(e)}")

def search_option():
    """
    Handles command execution or search based on the input prefix.
    """
    search_query = search_entry.get().strip()
    
    if not search_query:
        update_options(options)
        return
    
    if search_query.startswith("~"):
        run_command(search_query[1:])
    else:
        matches = [opt for opt, cmd in options.items() if search_query.lower() in cmd.lower()]
        if len(matches) == 1:
            run_command(matches[0])
        elif matches:
            update_options({opt: options[opt] for opt in matches})
        else:
            messagebox.showinfo("Not Found", "Command is not in the list")

def autocomplete(event):
    """
    Autocompletes the command based on partial input when Tab is pressed.
    """
    current_text = search_entry.get().strip().lower()
    if not current_text or current_text.startswith("~"):
        return
    
    matches = [option for option, command in options.items() if current_text in command.lower()]
    
    if len(matches) == 1:
        search_entry.delete(0, tk.END)
        search_entry.insert(0, matches[0])
    elif matches:
        update_options({opt: options[opt] for opt in matches})
    else:
        update_options(options)

def update_options(options_dict):
    """
    Updates the options displayed in the tkinter window.
    """
    for widget in options_frame.winfo_children():
        widget.destroy()
    for option, command in options_dict.items():
        tk.Label(options_frame, text=f"{option}. {command}", bg="#2f2f2f", fg="#ffffff").pack()

def cancel(event):
    """
    Closes the tkinter window.
    """
    root.quit()

# Create main window
root = tk.Tk()
root.title("Run Command")
root.configure(bg="#2f2f2f")

# Command options
options = {
    '1': 'dir',
    '2': 'cd',
    '3': 'date /T & time /T',
    '4': 'systeminfo',
    '5': 'net stats srv',
    '6': 'whoami /all'
}

# Search box
search_entry = tk.Entry(root, bg="#3f3f3f", fg="#ffffff", insertbackground="#ffffff")
search_entry.pack()
search_entry.focus_set()

# Bind keys
search_entry.bind("<Return>", lambda event: search_option())
search_entry.bind("<Tab>", autocomplete)
root.bind("<Escape>", cancel)

# Add keyboard shortcuts (Ctrl+1 through Ctrl+6)
for i in range(1, 7):
    root.bind(f"<Control-Key-{i}>", lambda e, opt=str(i): run_command(opt))

# Frame for options
options_frame = tk.Frame(root, bg="#2f2f2f")
options_frame.pack()

# Display initial options
update_options(options)

root.mainloop()
