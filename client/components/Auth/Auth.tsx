import { Box, Button, Text, VStack } from "@chakra-ui/react";
import { FC, useEffect } from "react";
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
} from "formik";
import { InputWithLabel } from "../UI";
import { useRouter } from "next/router";

export type FormValuesType = {
  id?: number;
  login: string;
  password: string;
  isLogged?: boolean;
};

export const Auth: FC = () => {
  const { replace } = useRouter();
  useEffect(() => {
    if (!localStorage.getItem("secret")) {
      localStorage.setItem(
        "secret",
        JSON.stringify([
          { id: 0, login: "kornev", password: "msk9909512", isLogged: false },
          { id: 1, login: "frein", password: "mso8112872", isLogged: false },
          { id: 2, login: "radchuk", password: "tve6845851", isLogged: false },
          {
            id: 3,
            login: "rogacheva",
            password: "kiy7397948",
            isLogged: false,
          },
          { id: 4, login: "zaparin", password: "kbv2803545", isLogged: false },
          {
            id: 5,
            login: "kondakova",
            password: "trv6318591",
            isLogged: false,
          },
          {
            id: 6,
            login: "vasilieva",
            password: "olt3526478",
            isLogged: false,
          },
          { id: 7, login: "loboda", password: "sbk7848764", isLogged: false },
        ])
      );
    } else if (
      JSON.parse(localStorage.getItem("secret") || "").find(
        (account: FormValuesType) => account.isLogged
      )
    ) {
      replace("/regions");
    }
  }, []);

  const initialValues: FormValuesType = {
    login: "",
    password: "",
  };

  const onSubmit = (values: FormValuesType) => {
    const accounts = JSON.parse(localStorage.getItem("secret") || "");
    const account = accounts.find(
      (account: FormValuesType) =>
        account.login === values.login && account.password === values.password
    );

    account.isLogged = true;

    localStorage.setItem("secret", JSON.stringify(accounts));

    if (account) {
      replace("/regions");
    }
  };

  return (
    <Box w="300px" backgroundColor="white" borderRadius="md" p="12px">
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>
          <VStack>
            <Text>Вход</Text>
            <Field
              id="login"
              name="login"
              placeholder="Логин"
              component={InputWithLabel}
            />
            <Field
              id="password"
              name="password"
              placeholder="Пароль"
              type="password"
              component={InputWithLabel}
            />
            <Button type="submit" colorScheme="blue">
              Войти
            </Button>
          </VStack>
        </Form>
      </Formik>
    </Box>
  );
};
