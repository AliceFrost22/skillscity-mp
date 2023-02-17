

export default function BurgerIcon(props) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke={props.color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={props.className}
      >
        <path d="M3 12h18M3 6h18M3 18h18" />
      </svg>
    )
  }