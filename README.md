# TextUtils

TextUtils is a React-based web application that provides a variety of text manipulation tools. It allows users to perform operations such as converting text to uppercase or lowercase, replacing words, slicing text, and more. The app also includes features like dark mode and a word/character counter.

---

## Features

- **Text Manipulation**:
  - Convert text to uppercase or lowercase.
  - Replace specific words in the text.
  - Slice a portion of the text.
  - Erase the entire text.

- **Text Analysis**:
  - Word and character count.
  - Estimated reading time.

- **Dark Mode**:
  - Toggle between light and dark themes.

- **Responsive Design**:
  - Works seamlessly across different devices and browsers.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/textUtils.git
   cd textUtils
   ```

2. Install dependencies
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm start
    ```

## File Structure

textUtils/
├── public/                 # Static files
│   ├── index.html          # Main HTML file
│   ├── manifest.json       # Web app manifest
│   └── robots.txt          # Robots.txt file
├── src/                    # Source files
│   ├── components/         # React components
│   │   ├── About.js        # About page
│   │   ├── Alert.js        # Alert component
│   │   ├── Navbar.js       # Navbar component
│   │   └── TextForms.js    # Main text manipulation component
│   ├── App.js              # Main app component
│   ├── App.css             # App-specific styles
│   ├── index.js            # Entry point
│   ├── index.css           # Global styles
│   ├── reportWebVitals.js  # Performance reporting
│   └── setupTests.js       # Test setup
├── .gitignore              # Git ignore file
├── package.json            # Project metadata and dependencies
└── README.md               # Project documentation

## Usage

 - Navigate to the homepage.
 - Enter or paste text into the input box.
 - Use the available buttons to:
    1. Convert text to uppercase or lowercase.
    2. Replace specific words.
    3. Slice or erase text.
 - View the word and character count, as well as the estimated reading time.
 - Toggle between light and dark modes using the switch in the navbar.

## Tech Stack

 - React: Frontend library.
 - Bootstrap: For styling and responsive design.
 - React Router: For routing.

## Contributing

1. Fork the repository.
2. Create a new branch:
```bash
git checkout -b feature-name
```
3. Commit your changes.
```bash
git commit -m "Add feature"
```
4. Push to the branch
```bash
git push origin feature-name
```
5. Open a pull request.


