import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Main = styled.div`
  min-height: 100vh;
  padding: 4rem 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url("https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80");
  background-size: contain;
`;

export const Middle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50rem;
  border: 1px solid gray;
`;

export const Button = styled.div`
  background-color: #333;
  color: ${(props) => (props.isTrue ? "gold" : "white")};
  width: 11rem;
  height: 3.3rem;
  line-height: 3.3rem;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  /* flex: 1; */
  background-color: #222;
  color: white;
  height: 44rem;
  font-size: 4rem;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
  }
`;
export const Bottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  /* flex: 1; */
  background-color: #eee;
  color: white;
  height: 55rem;
  font-size: 4rem;
  /* background-image: url("https://images.unsplash.com/photo-1629426958003-35a5583b2977?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"); */
  /* background-size: cover; */
`;
export const Title = styled.h1`
  line-height: 1.15;
  font-size: 3rem;
  a:hover {
  }
  a:focus {
  }
  a:active {
    text-decoration: underline;
  }
`;
export const Description = styled.div`
  text-align: center;
  margin: 4rem 0;
  line-height: 1.5;
  font-size: 1.5rem;
`;

export const Code = styled.div`
  background: #fafafa;
  border-radius: 5px;
  padding: 0.75rem;
  font-size: 1.1rem;
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace;
`;

export const Grid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 800px;
`;

export const Card = styled.div`
  margin: 2rem;
  padding: 1.6rem;
  text-align: left;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  /* transition: color 0.15s ease, border-color 0.15s ease; */
  /* max-width: 300px; */
  :hover {
    /* color: #0070f3; */
    border-color: #0070f3;
    cursor: pointer;
  }
`;

export const Logo = styled.div`
  height: 1em;
  margin-left: 0.5rem;

  @media (max-width: 600px) {
    .grid {
      width: 100%;
      flex-direction: column;
    }
  }

  @media (prefers-color-scheme: dark) {
    .card,
    .footer {
      border-color: #222;
    }
    .code {
      background: #111;
    }
    .logo img {
      filter: invert(1);
    }
  }
`;

export const Image = styled.img`
  width: 300px;
  height: 300px;
`;
