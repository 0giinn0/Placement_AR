# AR Room Redecorator

An immersive augmented reality (AR) room redecorator application that allows users to place furniture and decor items in their real-world space before purchasing.

## Overview

AR Room Redecorator is a web-based application that combines React, Three.js, and WebXR to provide an interactive AR experience. Users can:

- **Place furniture** in their room using their phone's camera
- **Browse a catalog** of 20+ 3D furniture models
- **Measure spaces** and distances in AR
- **Save and load** room layouts
- **Upload custom 3D models** for personalized experiences
- **Change colors and materials** of furniture items

The app works across multiple platforms:
- **Android**: Full AR with WebXR and hit-test
- **iOS**: Camera-based AR with estimated depth
- **Desktop**: 3D viewer with mouse controls

## Features

### 🎯 Core Features

1. **AR Furniture Placement**
   - Tap detected surfaces to place furniture
   - Real-world scale with accurate measurements
   - Support for multiple furniture categories (seating, tables, storage, lighting, decor)

2. **Furniture Catalog**
   - 20+ 3D models of various furniture items
   - Color variants for many items
   - Categorized browsing (sofa, chair, table, lamp, plant, etc.)

3. **Object Manipulation**
   - Drag to move furniture
   - Rotate and scale objects
   - Change colors and materials

4. **Measurement Tools**
   - Place measurement points
   - Calculate distances between points
   - Support for both metric and imperial units

5. **Save/Load Functionality**
   - Save room layouts locally
   - Load previously saved arrangements
   - Export/import layouts as JSON

6. **3D Scanning**
   - Record video of real objects
   - Generate 3D models using cloud photogrammetry
   - Upload custom furniture models

### 🛠 Technical Features

- **WebXR Support**: Native AR experience on Android devices
- **Progressive Web App**: Installable on mobile devices
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Performance Optimized**: Efficient rendering with Three.js
- **Cross-Platform**: Android, iOS, and desktop support

## Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Quick Start

```bash
# Clone the repository
git clone https://github.com/0giinn0/Placement_AR.git
cd Placement_AR

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Usage

### Web Browser

1. **Open the application** in your web browser
2. **Allow camera access** when prompted
3. **Select a furniture category** from the bottom carousel
4. **Choose a furniture item** by tapping on it
5. **Point your camera** at a flat surface (floor, table, etc.)
6. **Tap to place** the selected furniture
7. **Move and rotate** the furniture using touch gestures
8. **Add more items** to create your room layout
9. **Save your layout** when finished

### Mobile App Installation

1. **Open the website** in your mobile browser
2. **Look for the install prompt** (usually appears after first visit)
3. **Add to home screen** to install as a native app
4. **Grant camera permissions** when prompted

## Development

### Running the Development Server

```bash
npm run dev
```

This will start the Vite development server on `http://localhost:5173`

### Building for Production

```bash
npm run build
```

This will create a production-ready build in the `dist/` folder.

### Testing

The project uses standard testing practices. Add test files in the `src/` directory and run:

```bash
npm test
```

## Project Structure

```
AR Room Redecorator/
├── public/
│   ├── models/              # 3D furniture models
│   ├── favicon.svg
│   ├── icons.svg
│   └── manifest.json      # PWA manifest
├── src/
│   ├── App.tsx            # Main application component
│   ├── main.tsx           # Entry point
│   ├── styles/             # CSS styles
│   ├── types/              # TypeScript types
│   ├── detection.ts        # Platform detection
│   ├── catalog.ts          # Furniture catalog
│   └── ...                # Other source files
├── package.json
├── package-lock.json
├── vite.config.ts
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── eslint.config.js
└── README.md
```

## Technologies Used

### Frontend

- **React**: Component-based UI framework
- **TypeScript**: Typed JavaScript for better development experience
- **Vite**: Fast development server and build tool
- **Three.js**: 3D graphics library
- **React Three Fiber**: React binding for Three.js
- **@react-three/xr**: WebXR integration for AR/VR
- **@react-three/drei**: Helper components for Three.js

### AR/VR

- **WebXR**: Browser API for AR/VR experiences
- **Hit Test API**: Surface detection for AR placement
- **Camera API**: Access to device camera

### Styling

- **CSS3**: Modern CSS with responsive design
- **Tailwind CSS**: Utility-first CSS framework (if used)

### Build Tools

- **Vite**: Fast build tool and dev server
- **TypeScript**: Type checking and compilation
- **ESLint**: Code linting

## Contributing

### Contributing Guidelines

1. **Fork the repository**
2. **Create a feature branch**
3. **Make your changes**
4. **Test your changes**
5. **Commit your changes**
6. **Push to your branch**
7. **Create a pull request**

### Code Quality

- Follow existing code style and conventions
- Add comments for complex logic
- Write descriptive commit messages
- Ensure tests pass before submitting

## License

This project is licensed under the MIT License. See `LICENSE` file for details.

## Acknowledgements

Special thanks to:

- The React and Three.js communities for excellent libraries
- WebXR specification authors for enabling cross-platform AR
- All contributors who have helped improve this project

## Contact

For questions, issues, or feature requests, please:

- Open an issue on GitHub
- Check the documentation
- Contact the project maintainers

## Future Improvements

The AR Room Redecorator project has many potential enhancements:

1. **Enhanced 3D Models**: More detailed and realistic furniture models
2. **AR Cloud Integration**: Share layouts across devices
3. **AI-Powered Recommendations**: Suggest furniture based on room dimensions
4. **AR Collaboration**: Multiple users can collaborate in the same space
5. **AR Measurement Tools**: Advanced measurement and planning tools
6. **AR Lighting Simulation**: Realistic lighting effects
7. **AR Material Visualization**: Preview materials in real-time

## Support

If you encounter any issues or have questions, please:

1. Check the GitHub issues for known problems
2. Create a new issue with detailed information
3. Provide screenshots or videos of the problem
4. Include your browser version and device information

## Credits

- **Main Developer**: OpenHands
- **Repository**: https://github.com/0giinn0/Placement_AR.git
- **License**: MIT

---

*This project was created as a demonstration of AR web development capabilities using modern web technologies.*
