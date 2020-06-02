import styled from "styled-components";

export default () => (
  <div>
    <Title>My First Next.js Page</Title>
    <Text>testing some text</Text>
  </div>
);

const Title = styled.h1`
  color: red;
`;

const Text = styled.p.attrs({
  className: "text-yellow-300",
})``;
