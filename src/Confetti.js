import React from 'react';
import './Confetti.css';

class Confetti extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pieces: [],
    };
    this.animationInterval = null;
    this.animationTimeout = null;
  }

  componentDidMount() {
    const { icons = ['🎉', '🎊', '✨', '🥳', '🍾'], duration = 30000, count = 50 } = this.props;
    
    const newPieces = Array.from({ length: count }, () => ({
      icon: icons[Math.floor(Math.random() * icons.length)],
      x: Math.random() * 100,
      y: -10,
      size: Math.random() * 20 + 10,
      rotation: Math.random() * 360,
      speed: Math.random() * 3 + 1,
    }));

    this.setState({ pieces: newPieces });

    this.animationInterval = setInterval(() => {
      this.setState(prevState => ({
        pieces: prevState.pieces.map(piece => ({
          ...piece,
          y: piece.y + piece.speed,
          rotation: piece.rotation + piece.speed * 5,
        }))
      }));
    }, 50);

    this.animationTimeout = setTimeout(() => {
      clearInterval(this.animationInterval);
      this.setState({ pieces: [] });
    }, duration);
  }

  componentWillUnmount() {
    if (this.animationInterval) clearInterval(this.animationInterval);
    if (this.animationTimeout) clearTimeout(this.animationTimeout);
  }

  render() {
    return (
      <div className="confetti-container">
        {this.state.pieces.map((piece, index) => (
          <div
            key={index}
            className="confetti-piece"
            style={{
              left: `${piece.x}%`,
              top: `${piece.y}%`,
              fontSize: `${piece.size}px`,
              transform: `rotate(${piece.rotation}deg)`,
            }}
          >
            {piece.icon}
          </div>
        ))}
      </div>
    );
  }
}

export default Confetti;