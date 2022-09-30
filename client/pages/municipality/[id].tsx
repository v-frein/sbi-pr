import {
  Box,
  Button,
  Center,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { Municipality, Region } from "../../components";
import { data } from "../../components/RegionBlock/data";
import Script from "next/script";
import Image from "next/image";

const Municipality: NextPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isGeneral, setGeneral] = useState(0);

  const {
    query: { id: idMunicipality, fgw },
  } = useRouter();

  let munic;

  let regionName;

  data.find((regions) =>
    regions.find((region: Region) => {
      regionName = region.name;
      return region.municipalities.find((municipality: Municipality) => {
        munic = municipality.name;
        return municipality.id === idMunicipality;
      });
    })
  );

  const tab = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (fgw) setGeneral(3);
  }, [fgw]);

  useEffect(() => {
    if (tab.current) {
      tab.current.innerHTML = "";
      tab.current.insertAdjacentHTML(
        "afterbegin",
        `
        <div
        id="box_tripaggregator5158"
        style="height: 400px;"
      ></div>`
      );

      const jq = document.createElement("script");
      jq.src = "https://code.jquery.com/jquery-2.2.4.js";
      document.head.appendChild(jq);

      const ss = document.createElement("link");
      ss.rel = "stylesheet";
      ss.href = "https://ru.tripaggregator.com/css/widget.css";
      document.head.appendChild(ss);

      const script = document.createElement("script");
      script.src = "https://ru.tripaggregator.com/frame/aggjs?widget_id=5158";
      document.head.appendChild(script);
    }
  }, [tab.current]);

  return (
    <Box background="linear-gradient(180deg, #FFF9F9 0%, #0017E2 51.04%, #FF0000 100%, rgba(255, 255, 255, 0) 100%);">
      <Center>
        <Box w="1024px">
          <Text fontSize="42px" fontWeight="bold" textAlign="center">
            {regionName + "/" + munic}
          </Text>
          <Image src="/images/pushkinCard.jpeg" width="1024px" height="600px" />
          <Text my="18px" fontSize="46px" fontWeight="bold" textAlign="center">
            Афиша событий
          </Text>
          <Box>
            <Tabs
              {...{ index: isGeneral || undefined }}
              variant="soft-rounded"
              isFitted
              onChange={() => {
                setGeneral(0);
                if (tab.current) {
                  tab.current.innerHTML = "";
                  tab.current.insertAdjacentHTML(
                    "afterbegin",
                    `
                    <div
                    id="box_tripaggregator5158"
                    style="height: 400px;"
                  ></div>`
                  );

                  const jq = document.createElement("script");
                  jq.src = "https://code.jquery.com/jquery-2.2.4.js";
                  document.head.appendChild(jq);

                  const ss = document.createElement("link");
                  ss.rel = "stylesheet";
                  ss.href = "https://ru.tripaggregator.com/css/widget.css";
                  document.head.appendChild(ss);

                  const script = document.createElement("script");
                  script.src =
                    "https://ru.tripaggregator.com/frame/aggjs?widget_id=5158";
                  document.head.appendChild(script);
                }
              }}
            >
              <TabList>
                <Tab color="white">Кино</Tab>
                <Tab color="white">Театры</Tab>
                <Tab color="white">Концерты</Tab>
                <Tab color="white">Экскурсии</Tab>
                <Tab color="white">Встречи</Tab>
              </TabList>
              <TabPanels>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
                <TabPanel ref={tab}></TabPanel>
                <TabPanel></TabPanel>
              </TabPanels>
            </Tabs>
            <Center>
              <Button
                my="18px"
                fontSize="24px"
                fontWeight="bold"
                textAlign="center"
                colorScheme="blue"
                onClick={onOpen}
              >
                Инструкция пользования пушкинской картой
              </Button>

              <Modal size="5xl" isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Инструкция</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody></ModalBody>

                  <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={onClose}>
                      Close
                    </Button>
                    <Button variant="ghost">Secondary Action</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </Center>

            <Text
              my="18px"
              fontSize="24px"
              fontWeight="bold"
              textAlign="center"
            >
              Горячая линия: 8 800 555 35 35
            </Text>
          </Box>
        </Box>

        <Box>
          <div
            id="box_tripaggregator5158"
            style={{ width: "100%", display: "block", margin: "0%" }}
          ></div>
          <Script
            type="text/javascript"
            src="//ru.tripaggregator.com/widget/5158/frame/js"
          ></Script>
        </Box>
      </Center>
    </Box>
  );
};

export default Municipality;
