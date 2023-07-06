import logo from "../assets/images/auth/logo.svg";

type LogoProps = {
  width: number;
  height?: number;
};

function Logo({ width, height }: LogoProps) {
  return <img width={width} height={height} src={logo} alt="Another Earth" />;
}

export default Logo;
