# Adaptive Reader

A single-page application for presenting in-depth articles. It uses a simple Node.js build process to create self-contained versions for different topics from structured JSON files.

## Features

- **Data-Driven:** All content is managed in simple, structured JSON files.
- **Topic Switching:** A build script allows you to easily generate a version of the app for any topic.
- **Clean UI:** A clean, readable interface styled with Tailwind CSS Typography.
- **Themeable:** Includes a light/dark theme switcher with persistent preference in `localStorage`.
- **Zero Dependencies:** The final output is a static `index.html` with no external framework dependencies.

## Quick Start (Development)

To build and view a specific topic:

1.  **Clone the repository** and navigate to the root directory.

2.  **Build the app:** Choose a topic from the `/content` folder (e.g., `godel_theorems.json`) and run the build script. The script copies the chosen JSON into the `/public/data` directory.

    **For Windows (PowerShell):**
    ```powershell
    $env:APP_CONFIG_ID="godel_theorems"; node build.js
    ```
    **For macOS/Linux:**
    ```bash
    APP_CONFIG_ID=godel_theorems node build.js
    ```

3.  **Serve the app:** Navigate to the output directory and start a local web server.
    ```powershell
    cd public
    python -m http.server
    ```

4.  **View in your browser:** Open `http://localhost:8000`.

## Creating New Content Modules

1.  **Create a new JSON file** in the `/content` directory (e.g., `my_new_topic.json`), following the established data structure.

2.  **Build the application** with your new topic by setting the `APP_CONFIG_ID` to your new filename (without the `.json` extension):
    ```powershell
    $env:APP_CONFIG_ID="my_new_topic"; node build.js
    ```
3.  **Serve the `public` directory** as described above to see your new version.

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.