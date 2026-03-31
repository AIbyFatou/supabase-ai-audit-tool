
type ButtonProps={
      text:string;
    onClick :() => void;
}
  

const Button = ({text, onClick}:ButtonProps) => {
    return (<button type="button" onClick={onClick} className="p-8 bg-pink-500 rounded-xl text-white font-medium">
        {text}
        </button>)
}

export default Button;
