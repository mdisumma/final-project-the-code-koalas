import "./Koala.css";

export default function Koala({ koalaText }: any) {
  return (
    <div className="koala-container">
      <svg
        id="koala"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 410.02 361.26"
      >
        <g id="right-hear">
          <path
            className="cls-5"
            d="M373.26,20.21c20.6,13.32,33.48,33.25,36.19,52.68,1.64,11.75-26,21.52-26,21.52,0,0,1.94,28.89-10.39,31.99-18.44,4.63-40.9.85-60.72-11.96-33.06-21.37-53.55-52.8-36.72-78.82,16.82-26.02,64.58-36.79,97.64-15.42h0Z"
          />
          <path
            className="cls-8"
            d="M375.95,85.05c9.49,16.44,11.33,34.71,6.34,49.05-3.02,8.67-25.5,5.65-25.5,5.65,0,0-8.86,20.59-18.44,18.37-14.33-3.32-28.47-13.84-37.6-29.66-15.23-26.38-10.75-57.49,10.02-69.48s49.95-.32,65.18,26.06h0Z"
          />
        </g>
        <g id="left-hear">
          <path
            className="cls-5"
            d="M36.76,20.21C16.16,33.53,3.28,53.47.57,72.9c-1.64,11.75,26,21.52,26,21.52,0,0-1.94,28.89,10.39,31.99,18.44,4.63,40.9.85,60.72-11.96,33.06-21.37,53.55-52.8,36.72-78.82S69.82-1.16,36.76,20.21Z"
          />
          <path
            className="cls-8"
            d="M34.07,85.05c-9.49,16.44-11.33,34.71-6.34,49.05,3.02,8.67,25.5,5.65,25.5,5.65,0,0,8.86,20.59,18.44,18.37,14.33-3.32,28.47-13.84,37.6-29.66,15.23-26.38,10.75-57.49-10.02-69.48-20.77-11.99-49.95-.32-65.18,26.06h0Z"
          />
        </g>
        <path
          id="body"
          className="cls-5"
          d="M322.23,148.31c0-57-46.68-103.82-106.3-108.97-13.69-17.19-8.34-38.11-8.34-38.11-15.01,11.06-25.27,29.97-26.85,39.98-53.1,10.43-92.96,54.41-92.96,107.09,0,36.19,18.81,59.11,47.8,71.68-8.79,16.9-13.92,37.2-13.92,59.02,0,58.91,35.98,68.89,82,68.89s84.67-9.98,84.67-68.89c0-21.83-5.13-42.12-13.92-59.02,28.99-12.57,47.8-35.49,47.8-71.68h.02Z"
        />
        <g id="eyes">
          <ellipse
            className="eye"
            cx="142.6"
            cy="142.35"
            rx="27.78"
            ry="21.11"
            transform="translate(-10.12 273.77) rotate(-85.66)"
          />
          <ellipse
            className="eye"
            cx="267.41"
            cy="142.37"
            rx="21.11"
            ry="27.78"
            transform="translate(-10.01 20.64) rotate(-4.34)"
          />
          <circle className="cls-9" cx="135.64" cy="127.69" r="5.56" />
          <circle className="cls-9" cx="272.59" cy="127.69" r="5.56" />
        </g>
        <path
          id="nose"
          className="cls-4"
          d="M225.95,161.67c0,26.01-9.95,31.72-22.22,31.72s-22.22-5.7-22.22-31.72,9.95-47.1,22.22-47.1,22.22,21.09,22.22,47.1Z"
        />
        <ellipse
          id="belly"
          className="cls-3"
          cx="205.01"
          cy="277.75"
          rx="44.89"
          ry="49.04"
        />
        <g id="harms">
          <path
            className="cls-8"
            d="M146.23,233.34c22.36,13.2,34.12,34.68,26.27,47.98s-31.52,11.86-54.7.17c-16.41-8.28-21.24-29.74-20.38-39.15,1.42-15.38,26.45-22.2,48.81-9h0Z"
          />
          <path
            className="cls-8"
            d="M263.79,233.34c-22.36,13.2-34.12,34.68-26.27,47.98,7.85,13.3,31.52,11.86,54.7.17,16.41-8.28,21.37-27.1,20.38-39.15-1.28-15.39-26.45-22.2-48.81-9h0Z"
          />
        </g>
        <g id="foots">
          <ellipse
            className="cls-7"
            cx="131.59"
            cy="329.71"
            rx="26.27"
            ry="37.49"
            transform="translate(-208.93 229.34) rotate(-51.82)"
          />
          <ellipse
            className="cls-7"
            cx="278.44"
            cy="329.73"
            rx="37.49"
            ry="26.27"
            transform="translate(-144.26 242.65) rotate(-38.18)"
          />
        </g>
        <path
          id="mouth"
          className="cls-6"
          d="M229.52,197.48s-8.63,24.75-25.8,24.75-26.24-24.75-26.24-24.75c0,0,9.06,4.35,26.24,4.35s25.8-4.35,25.8-4.35Z"
        />
      </svg>
      {koalaText !== '' ? (
        <div className="speach-box">
          <span className="speach-text">{koalaText}</span>
          <svg
            id="speach-spike"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 589.89 361.27"
          >
            <polygon
              className="koala-speach"
              points="473 214 523 142.35 589.89 142.35 473 214"
            />
          </svg>
        </div>
      ) : ''}
    </div>
  );
}
