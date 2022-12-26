import { FormEvent, MouseEvent } from "react";
import { useRouter } from "next/router";
import {
  Input,
  Link,
  Grid,
  Button,
  Text,
  Checkbox,
  CSS,
} from "@nextui-org/react";
import { Password, User } from "react-iconly";

//utils
import userService from "services/user";

//components
import Logo from "components/Logo";

//nextUI css
const containerCss: CSS = {
  maxW: "400px",
  margin: "0 auto",
};

const logoTextCss: CSS = {
  textGradient: "$gradBlue",
  fontSize: 18,
  fontWeight: "bold",
};

export default function Login() {
  const router = useRouter();
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const username = form.username.value.trim();
    const password = form.password.value.trim();

    if (password === "" && username === "") {
      return;
    }

    userService.Auth.Login({ username, password }).then((response) => {
      console.log({ response });
      router.push("/");
    });
  };

  const usingPublicAccount = (event: MouseEvent<HTMLButtonElement>) => {};

  return (
    <>
      <form className="container-form" onSubmit={onSubmit}>
        <Grid.Container css={containerCss} gap={2}>
          <Grid xs={12} alignItems="center" justify="center">
            <Logo />
            <Text css={logoTextCss}>Mofilms</Text>
          </Grid>

          <Grid xs={12}>
            <Input
              clearable
              bordered
              fullWidth
              required
              color="primary"
              name="username"
              size="lg"
              placeholder="User name"
              contentLeft={<User />}
            />
          </Grid>
          <Grid xs={12}>
            <Input
              clearable
              bordered
              fullWidth
              required
              color="primary"
              size="lg"
              name="password"
              placeholder="Password"
              type="password"
              contentLeft={<Password />}
            />
          </Grid>
          <Grid xs={12} justify="space-between">
            <Checkbox color="gradient">
              <Text size={14}>Remember me</Text>
            </Checkbox>
            <Link href="#">
              <Text size={14}>Forgot password?</Text>
            </Link>
          </Grid>
          <Grid xs={12} justify="space-between">
            <Button
              color="success"
              type="button"
              flat
              auto
              icon={<User />}
              onClick={usingPublicAccount}
            >
              Public account
            </Button>
            <Button color="primary" type="submit" shadow auto>
              Sign in
            </Button>
          </Grid>
        </Grid.Container>
      </form>

      <style jsx>{`
        .container-form {
          width: 100%;
          height: 75vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </>
  );
}
