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
  subId?: number;
  login?: string;
  password?: string;
  isLogged?: boolean;
  balance?: number;
  type?: string;
};

export const Auth: FC = () => {
  const { replace } = useRouter();
  useEffect(() => {
    if (!localStorage.getItem("secret")) {
      localStorage.setItem(
        "secret",
        JSON.stringify([
          {
            id: 0,
            login: "kornev",
            password: "msk9909512",
            isLogged: false,
            balance: 500,
            type: "referrer",
          },
          {
            id: 1,
            login: "frein",
            password: "mso8112872",
            isLogged: false,
            balance: 500,
            type: "referrer",
          },
          {
            id: 2,
            login: "radchuk",
            password: "tve6845851",
            isLogged: false,
            balance: 500,
            type: "referrer",
          },
          {
            id: 3,
            login: "rogacheva",
            password: "kiy7397948",
            isLogged: false,
            balance: 500,
            type: "referrer",
          },
          {
            id: 4,
            login: "zaparin",
            password: "kbv2803545",
            isLogged: false,
            balance: 500,
            type: "referrer",
          },
          {
            id: 5,
            login: "kondakova",
            password: "trv6318591",
            isLogged: false,
            balance: 500,
            type: "referrer",
          },
          {
            id: 6,
            login: "vasilieva",
            password: "olt3526478",
            isLogged: false,
            balance: 500,
            type: "referrer",
          },
          {
            id: 7,
            login: "loboda",
            password: "sbk7848764",
            isLogged: false,
            balance: 500,
            type: "referrer",
          },
          {
            id: 0,
            subId: 0,
            login: "sbi69andreMO",
            password: "rst623728",
            isLogged: false,
            balance: 500,
            type: "referral",
          },
          {
            id: 1,
            subId: 0,
            login: "sbi69vesyeMO",
            password: "rst784299",
            isLogged: false,
            balance: 500,
            type: "referral",
          },
          {
            id: 2,
            subId: 0,
            login: "sbi69vyshnGO",
            password: "rst742972",
            isLogged: false,
            balance: 500,
            type: "referral",
          },
          {
            id: 3,
            subId: 0,
            login: "sbi69kimrsGO",
            password: "rst824849",
            isLogged: false,
            balance: 500,
            type: "referral",
          },
          {
            id: 4,
            subId: 0,
            login: "sbi69rzhevGO",
            password: "rst724974",
            isLogged: false,
            balance: 500,
            type: "referral",
          },
          {
            id: 5,
            subId: 0,
            login: "sbi69tverGO",
            password: "rst316386",
            isLogged: false,
            balance: 500,
            type: "referral",
          },
          {
            id: 6,
            subId: 0,
            login: "sbi69torzhGO",
            password: "rst935972",
            isLogged: false,
            balance: 500,
            type: "referral",
          },
          {
            id: 7,
            subId: 0,
            login: "sbi69zapadMO",
            password: "rst648486",
            isLogged: false,
            balance: 500,
            type: "referral",
          },
          {
            id: 8,
            subId: 0,
            login: "sbi69ozernGO",
            password: "rst622588",
            isLogged: false,
            balance: 500,
            type: "referral",
          },
          {
            id: 9,
            subId: 0,
            login: "sbi69solnecGO",
            password: "rst247792",
            isLogged: false,
            balance: 500,
            type: "referral",
          },
          {
            id: 10,
            subId: 0,
            login: "sbi69kashiGO",
            password: "rst084579",
            isLogged: false,
            balance: 500,
            type: "referral",
          },
          {
            id: 11,
            subId: 0,
            login: "sbi69krasnMO",
            password: "rst657392",
            isLogged: false,
            balance: 500,
            type: "referral",
          },
          {
            id: 12,
            subId: 0,
            login: "sbi69lesnoMO",
            password: "rst297947",
            isLogged: false,
            balance: 500,
            type: "referral",
          },
          {
            id: 13,
            subId: 0,
            login: "sbi69nelidGO",
            password: "rst975874",
            isLogged: false,
            balance: 500,
            type: "referral",
          },
          {
            id: 14,
            subId: 0,
            login: "sbi69oleniMO",
            password: "rst264862",
            isLogged: false,
            balance: 500,
            type: "referral",
          },
          {
            id: 15,
            subId: 0,
            login: "sbi69ostasGO",
            password: "rst083978",
            isLogged: false,
            balance: 500,
            type: "referral",
          },
          {
            id: 16,
            subId: 0,
            login: "sbi69penovMO",
            password: "rst136316",
            isLogged: false,
            balance: 500,
            type: "referral",
          },
          {
            id: 17,
            subId: 0,
            login: "sbi69sandoMO",
            password: "rst527572",
            isLogged: false,
            balance: 500,
            type: "referral",
          },
          {
            id: 18,
            subId: 0,
            login: "sbi69selizhMO",
            password: "rst826431",
            isLogged: false,
            balance: 500,
            type: "referral",
          },
          {
            id: 19,
            subId: 0,
            login: "sbi69udomeGO",
            password: "rst248826",
            isLogged: false,
            balance: 500,
            type: "referral",
          },
          {
            id: 20,
            subId: 0,
            login: "sbi69bezheMR",
            password: "rst974758",
            isLogged: false,
            balance: 500,
            type: "referral",
          },
          {
            id: 21,
            subId: 0,
            login: "sbi69belskMR",
            password: "rst347032",
            isLogged: false,
            balance: 500,
            type: "referral",
          },
          {
            id: 22,
            subId: 0,
            login: "sbi69bologMR",
            password: "rst932479",
            isLogged: false,
            balance: 500,
            type: "referral",
          },
          {
            id: 23,
            subId: 0,
            login: "sbi69zharkMR",
            password: "rst093250",
            isLogged: false,
            balance: 500,
            type: "referral",
          },
          {
            id: 24,
            subId: 0,
            login: "sbi69zubcoMR",
            password: "rst274979",
            isLogged: false,
            balance: 500,
            type: "referral",
          },
          {
            id: 25,
            subId: 0,
            login: "sbi69kalinMR",
            password: "rst264842",
            isLogged: false,
            balance: 500,
            type: "referral",
          },
          {
            id: 26,
            subId: 0,
            login: "sbi69kalyaMR",
            password: "rst982497",
            isLogged: false,
            balance: 500,
            type: "referral",
          },
          {
            id: 27,
            subId: 0,
            login: "sbi69kesovMR",
            password: "rst684268",
            isLogged: false,
            balance: 500,
            type: "referral",
          },
          {
            id: 28,
            subId: 0,
            login: "sbi69kimrsMR",
            password: "rst827472",
            isLogged: false,
            balance: 500,
            type: "referral",
          },
          {
            id: 29,
            subId: 0,
            login: "sbi69konakMR",
            password: "rst297407",
            isLogged: false,
            balance: 500,
            type: "referral",
          },
          {
            id: 30,
            subId: 0,
            login: "sbi69kuvshMR",
            password: "rst624685",
            isLogged: false,
            balance: 500,
            type: "referral",
          },
          {
            id: 31,
            subId: 0,
            login: "sbi69lihosMO",
            password: "rst082492",
            isLogged: false,
            balance: 500,
            type: "referral",
          },
          {
            id: 32,
            subId: 0,
            login: "sbi69maksaMR",
            password: "rst286484",
            isLogged: false,
            balance: 500,
            type: "referral",
          },
          {
            id: 33,
            subId: 0,
            login: "sbi69molokMO",
            password: "rst286486",
            isLogged: false,
            balance: 500,
            type: "referral",
          },
          {
            id: 34,
            subId: 0,
            login: "sbi69ramesMO",
            password: "rst274927",
            isLogged: false,
            balance: 500,
            type: "referral",
          },
          {
            id: 35,
            subId: 0,
            login: "sbi69rzhevMR",
            password: "rst824862",
            isLogged: false,
            balance: 500,
            type: "referral",
          },
          {
            id: 36,
            subId: 0,
            login: "sbi69sonkoMR",
            password: "rst286482",
            isLogged: false,
            balance: 500,
            type: "referral",
          },
          {
            id: 37,
            subId: 0,
            login: "sbi69spiroMO",
            password: "rst024892",
            isLogged: false,
            balance: 500,
            type: "referral",
          },
          {
            id: 38,
            subId: 0,
            login: "sbi69stariMR",
            password: "rst827462",
            isLogged: false,
            balance: 500,
            type: "referral",
          },
          {
            id: 39,
            subId: 0,
            login: "sbi69torzhMR",
            password: "rst824828",
            isLogged: false,
            balance: 500,
            type: "referral",
          },
          {
            id: 40,
            subId: 0,
            login: "sbi69toropMR",
            password: "rst824864",
            isLogged: false,
            balance: 500,
            type: "referral",
          },
          {
            id: 41,
            subId: 0,
            login: "sbi69firovMR",
            password: "rst727554",
            isLogged: false,
            balance: 500,
            type: "referral",
          },




          {
            id: 0,
            subId: 1,
            login: "sbi40kaluzGO",
            password: "rst648648",
            isLogged: false,
            balance: 500,
            type: "referral",
          },
          {
            id: 1,
            subId: 1,
            login: "sbi40obninGO",
            password: "rst724779",
            isLogged: false,
            balance: 500,
            type: "referral",
          },
          {
            id: 2,
            subId: 1,
            login: "sbi40babynMR",
            password: "rst747593",
            isLogged: false,
            balance: 500,
            type: "referral",
          },
          {
            id: 3,
            subId: 1,
            login: "sbi40bagryMR",
            password: "rst836843",
            isLogged: false,
            balance: 500,
            type: "referral",
          },
          {
            id: 4,
            subId: 1,
            login: "sbi40borovMR",
            password: "rst982480",
            isLogged: false,
            balance: 500,
            type: "referral",
          },
          {
            id: 5,
            subId: 1,
            login: "sbi40dzerzMR",
            password: "rst284284",
            isLogged: false,
            balance: 500,
            type: "referral",
          },
          {
            id: 6,
            subId: 1,
            login: "sbi40duminMR",
            password: "rst724729",
            isLogged: false,
            balance: 500,
            type: "referral",
          },
          {
            id: 7,
            subId: 1,
            login: "sbi40zhizdMR",
            password: "rst274294",
            isLogged: false,
            balance: 500,
            type: "referral",
          },
          {
            id: 8,
            subId: 1,
            login: "sbi40zhukoMR",
            password: "rst573648",
            isLogged: false,
            balance: 500,
            type: "referral",
          },
          {
            id: 9,
            subId: 1,
            login: "sbi40iznosMR",
            password: "rst589391",
            isLogged: false,
            balance: 500,
            type: "referral",
          },
          {
            id: 10,
            subId: 1,
            login: "sbi40kirovMR",
            password: "rst397539",
            isLogged: false,
            balance: 500,
            type: "referral",
          },
          {
            id: 11,
            subId: 1,
            login: "sbi40kozelMR",
            password: "rst083593",
            isLogged: false,
            balance: 500,
            type: "referral",
          },
          {
            id: 12,
            subId: 1,
            login: "sbi40kuybyMR",
            password: "rst536763",
            isLogged: false,
            balance: 500,
            type: "referral",
          },
          {
            id: 13,
            subId: 1,
            login: "sbi40lyudiMR",
            password: "rst837485",
            isLogged: false,
            balance: 500,
            type: "referral",
          },
          {
            id: 14,
            subId: 1,
            login: "sbi40maloyMR",
            password: "rst935772",
            isLogged: false,
            balance: 500,
            type: "referral",
          },
          {
            id: 15,
            subId: 1,
            login: "sbi40medynMR",
            password: "rst935973",
            isLogged: false,
            balance: 500,
            type: "referral",
          },
          {
            id: 16,
            subId: 1,
            login: "sbi40meshcMR",
            password: "rst653622",
            isLogged: false,
            balance: 500,
            type: "referral",
          },
          {
            id: 17,
            subId: 1,
            login: "sbi40mosalMR",
            password: "rst045823",
            isLogged: false,
            balance: 500,
            type: "referral",
          },
          {
            id: 18,
            subId: 1,
            login: "sbi40peremMR",
            password: "rst354282",
            isLogged: false,
            balance: 500,
            type: "referral",
          },
          {
            id: 19,
            subId: 1,
            login: "sbi40spasdMR",
            password: "rst265421",
            isLogged: false,
            balance: 500,
            type: "referral",
          },
          {
            id: 20,
            subId: 1,
            login: "sbi40suhinMR",
            password: "rst836428",
            isLogged: false,
            balance: 500,
            type: "referral",
          },
          {
            id: 21,
            subId: 1,
            login: "sbi40tarusMR",
            password: "rst373292",
            isLogged: false,
            balance: 500,
            type: "referral",
          },
          {
            id: 22,
            subId: 0,
            login: "sbi40ulianMR",
            password: "rst276480",
            isLogged: false,
            balance: 500,
            type: "referral",
          },
          {
            id: 23,
            subId: 1,
            login: "sbi40ferzinMR",
            password: "rst037256",
            isLogged: false,
            balance: 500,
            type: "referral",
          },
          {
            id: 24,
            subId: 1,
            login: "sbi40hvastMR",
            password: "rst927426",
            isLogged: false,
            balance: 500,
            type: "referral",
          },
          {
            id: 25,
            subId: 1,
            login: "sbi40yuhnoMR",
            password: "rst236520",
            isLogged: false,
            balance: 500,
            type: "referral",
          },
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
