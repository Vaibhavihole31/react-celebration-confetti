# React Celebration Confetti

A lightweight and customizable confetti animation component for React applications.

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Props](#props)
4. [Customization](#customization)
5. [Development](#development)
6. [Contributing](#contributing)
7. [License](#license)

## Installation

To install the React Celebration Confetti library, run the following command in your project directory:

```bash
npm install react-celebration-confetti
```

or if you're using Yarn:

```bash
yarn add react-celebration-confetti
```

## Usage

Here's a basic example of how to use the Confetti component in your React application:

```jsx
import React, { useState } from 'react';
import { Confetti } from 'react-celebration-confetti';

function App() {
  const [showConfetti, setShowConfetti] = useState(false);

  const handleCelebrate = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 30000); // 1 minute
  };

  return (
    <div>
      <button onClick={handleCelebrate}>Celebrate!</button>
      {showConfetti && <Confetti />}
    </div>
  );
}

export default App;
```

This example will display a button that, when clicked, will trigger a confetti animation that lasts for 1 minute.

## Props

The Confetti component accepts the following props:

| Prop     | Type     | Default                             | Description                                  |
|----------|----------|-------------------------------------|----------------------------------------------|
| icons    | string[] | ['🎉', '🎊', '✨', '🥳', '🍾']      | Array of icons to use as confetti            |
| duration | number   | 30000                               | Duration of the animation in milliseconds    |
| count    | number   | 50                                  | Number of confetti pieces to display         |

## Customization

You can customize the confetti animation by passing different props to the Confetti component:

```jsx
<Confetti 
  icons={['🌟', '💖', '🏆', '🎈']}
  duration={30000}
  count={200}
/>
```

This will create a confetti animation with custom icons, lasting for 30 seconds, and displaying 200 confetti pieces.

## Development

To set up the project for development:

1. Clone the repository:
   ```bash
   git clone https://github.com/Vaibhavihole31/react-celebration-confetti.git
   cd react-celebration-confetti
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. To build the library:
   ```bash
   npm run build
   ```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

---

For more information or support, please open an issue in the GitHub repository.