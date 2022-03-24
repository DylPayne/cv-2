import Head from "next/head";
import { useWindowScroll } from "@mantine/hooks";
import { useMediaQuery } from "react-responsive";
import emailjs from "@emailjs/browser";
// import { useRef } from "react";

import {
  AppShell,
  Text,
  Space,
  ActionIcon,
  MantineProvider,
  Title,
  Button,
  Tooltip,
  Progress,
  Badge,
  TextInput,
  Textarea,
  InputWrapper,
} from "@mantine/core";
import {
  BrandGithub,
  Mail,
  BrandWhatsapp,
  BrandReactNative,
  DeviceTv,
  Server,
  ArrowUpIcon,
  UserCircle,
  Paperclip,
  Send,
} from "tabler-icons-react";
import { useForm } from "@mantine/hooks";
import { useRef } from "react";

export default function Home() {
  const [scroll, scrollTo] = useWindowScroll();

  const isTabletOrMobile = useMediaQuery({ maxWidth: 1000 });

  const form = useForm({
    initialValues: {
      email: "",
      name: "",
      subject: "",
      message: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("Sending...");
    emailjs
      .sendForm(
        "service_js4chue",
        "template_h3ih17x",
        formRef.current,
        "user_AvdqkQRo1Tj2mPGvjiX7N"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Sent!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <MantineProvider theme={{ colorScheme: "dark" }}>
      <Head>
        <meta name="theme-color" content="#fff" />
      </Head>
      <AppShell
        padding="md"
        header={
          <header
            style={{
              height: isTabletOrMobile ? 100 : 50,
              display: "flex",
              flexDirection: isTabletOrMobile ? "column" : "row",
              alignItems: isTabletOrMobile ? "unset" : "center",
              backgroundColor: "black",
              paddingLeft: 20,
              paddingRight: 20,
              justifyContent: isTabletOrMobile
                ? "space-around"
                : "space-between",
            }}
          >
            <div
              style={{
                width: "100%",
                // border: "1px solid white",
                display: "flex",
                justifyContent: isTabletOrMobile ? "center" : "unset",
              }}
            >
              <Text
                component="span"
                align="center"
                variant="gradient"
                gradient={{ from: "teal", to: "blue", deg: 120 }}
                size="xl"
                weight={700}
                style={{
                  fontFamily: "Greycliff CF, sans-serif",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                DYLAN PAYNE
              </Text>
            </div>
            <div
              style={{
                display: "flex",
                // border: "1px solid white",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <Badge
                variant="gradient"
                gradient={{ from: "teal", to: "lime", deg: 105 }}
              >
                Open to offers
              </Badge>
              <Space w="md" />
              <Badge
                variant="gradient"
                gradient={{ from: "red", to: "grape", deg: 45 }}
              >
                Looking for work
              </Badge>
              <Space w="md" />
              <Tooltip
                position="bottom"
                placement="end"
                gutter={10}
                label="DylPayne"
                transitionTimingFunction="ease"
                withArrow
                transition="skew-up"
                transitionDuration={500}
                color="blue"
                closeDelay={1000}
              >
                <ActionIcon>
                  <BrandGithub size={28} strokeWidth={1.5} color={"white"} />
                </ActionIcon>
              </Tooltip>
              <Space w="md" />
              <Tooltip
                position="bottom"
                placement="end"
                gutter={10}
                label="dylan@rhys.co.za"
                transitionTimingFunction="ease"
                withArrow
                transition="skew-up"
                transitionDuration={500}
                color="blue"
                closeDelay={1000}
              >
                <ActionIcon>
                  <Mail size={28} strokeWidth={1.5} color={"white"} />
                </ActionIcon>
              </Tooltip>
              <Space w="md" />
              <Tooltip
                position="bottom"
                placement="end"
                gutter={10}
                label="+27 79 427 3172"
                transitionTimingFunction="ease"
                withArrow
                transition="skew-up"
                transitionDuration={500}
                color="blue"
                closeDelay={1000}
              >
                <ActionIcon>
                  <BrandWhatsapp size={28} strokeWidth={1.5} color={"white"} />
                </ActionIcon>
              </Tooltip>
            </div>
          </header>
        }
      >
        <Title
          order={1}
          align="center"
          style={{
            fontSize: isTabletOrMobile ? 40 : 100,
            fontStretch: "150%",
            backgroundColor: "black",
            color: "white",
          }}
        >
          WEB DEVELOPER
        </Title>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            marginTop: 50,
          }}
          className="bg1"
        >
          <div
            style={{
              backgroundColor: "white",
              border: "1px solid black",
              // height: 300,
              padding: 30,
              maxWidth: 700,
            }}
          >
            <Text
              component="span"
              align="center"
              variant="gradient"
              gradient={{ from: "indigo", to: "cyan", deg: 45 }}
              weight={700}
              style={{ fontFamily: "Greycliff CF, sans-serif", fontSize: 12 }}
            >
              <BrandReactNative size={14} color="#1389f0" />
              {"  "}REACT POWERED
            </Text>
            <Title order={2} style={{ fontStretch: "130%" }}>
              Hi there,
            </Title>
            <Title order={1} style={{ fontStretch: "130%" }}>
              I'm Dylan
            </Title>
            <Space h="md" />
            <Text size="lg">
              I'm a full stack web developer. I love working with Next.js,
              Firebase and Supabase. I also have experience in many other
              languages, including SQL, Java, Python, PHP and more.
            </Text>
            <Space h="xl" />
            <div style={{ width: "40%" }}>
              <Button
                variant="gradient"
                gradient={{ from: "teal", to: "blue", deg: 60 }}
                compact
                fullWidth
                radius={0}
              >
                Get in touch
              </Button>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // flexDirection: "column",
            marginTop: 50,
            flexDirection: isTabletOrMobile ? "column" : "row",
          }}
          className="bg1"
        >
          <div
            style={{
              backgroundColor: "white",
              border: "1px solid black",
              // height: 300,
              padding: 30,
              maxWidth: 500,
              marginRight: isTabletOrMobile ? 0 : 50,
              marginBottom: isTabletOrMobile ? 50 : 0,
            }}
          >
            <Text
              component="span"
              align="center"
              variant="gradient"
              gradient={{ from: "red", to: "grape", deg: 45 }}
              weight={700}
              style={{ fontFamily: "Greycliff CF, sans-serif", fontSize: 12 }}
            >
              <DeviceTv size={14} color="#e24df0" />
              {"  "}FRONT-END
            </Text>
            <Title order={2} style={{ fontStretch: "130%" }}>
              React
            </Title>
            <Title order={1} style={{ fontStretch: "130%" }}>
              Next.js, Gatsby.js
            </Title>
            <Space h="md" />
            <Text size="lg">
              I do the majority of my front-end work with Next. However, I also
              have some experience with Gatsby. I am also skilled in
              Illustrator, Photoshop and Xd.
            </Text>
            <Space h="xl" />
            <div style={{ width: "40%", height: 50 }}>
              <Button
                variant="gradient"
                gradient={{ from: "grape", to: "blue", deg: 60 }}
                compact
                fullWidth
                radius={0}
              >
                Get in touch
              </Button>
            </div>
          </div>
          <div
            style={{
              backgroundColor: "white",
              border: "1px solid black",
              // height: 300,
              padding: 30,
              maxWidth: 500,
              marginLeft: isTabletOrMobile ? 0 : 50,
            }}
          >
            <Text
              component="span"
              align="center"
              variant="gradient"
              gradient={{ from: "red", to: "grape", deg: 45 }}
              weight={700}
              style={{ fontFamily: "Greycliff CF, sans-serif", fontSize: 12 }}
            >
              <Server size={14} color="#e24df0" />
              {"  "}BACK-END
            </Text>
            <Title order={2} style={{ fontStretch: "130%" }}>
              Firebase,
            </Title>
            <Title order={1} style={{ fontStretch: "130%" }}>
              Supabase, Node
            </Title>
            <Space h="md" />
            <Text size="lg">
              I've used Supabase, Firebase and Node (Express) in the past. I can
              build you anything from an e-commerce site to a simple blog.
            </Text>
            <Space h="xl" />
            <div style={{ width: "40%", height: 50 }}>
              <Button
                variant="gradient"
                gradient={{ from: "grape", to: "blue", deg: 60 }}
                compact
                fullWidth
                radius={0}
              >
                Get in touch
              </Button>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "black",
            marginTop: 50,
            // paddingTop: 50,
            paddingBottom: 50,
            marginLeft: -16,
            marginRight: -16,
          }}
        >
          <Title
            order={1}
            align="center"
            style={{
              fontSize: isTabletOrMobile ? 40 : 100,
              fontStretch: "150%",
              color: "white",
              marginTop: 50,
              paddingTop: 30,
            }}
          >
            FREELANCER
          </Title>
          <div
            className="bg2"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 50,
            }}
          >
            <div
              style={{
                // height: 200,
                maxWidth: 700,
                width: "90%",
                backgroundColor: "black",
                border: "1px solid white",
                padding: 30,
                // display: "flex",
              }}
            >
              <Title order={2} style={{ color: "white", fontStretch: "150%" }}>
                About Me
              </Title>
              <Space h="md" />
              <Text style={{ color: "white" }}>
                I am a full stack developer based in the beautiful Cape Town. I
                am experienced in React, Next.js, Gatsby.js, Google Firebase and
                Supabase. I am also comfortable with using the Adobe suite.
                (Photoshop, Illustrator, Xd, etc.)
                <br />
                <br />I started my journey with Delphi/Pascal software about 5
                years ago, and it has been quite the journey since then. I have
                learnt multiple languages, including Python, Javascript, HTML,
                CSS, Java, SQL, PHP and more.
                <br />
                <br />I studied Software Engineering and Full Stack Development
                at a college in Cape Town called Hyperiondev. There, I learned
                Javascript, HTML, CSS, Java, SQL, PHP and more.
              </Text>
            </div>
          </div>
          <Space h="md" />
          <div
            className="bg2"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 50,
            }}
          >
            <div
              style={{
                // height: 200,
                maxWidth: 500,
                width: "90%",
                backgroundColor: "black",
                border: "1px solid white",
                padding: 30,
                // display: "flex",
              }}
            >
              <Title order={2} style={{ color: "white", fontStretch: "150%" }}>
                My Skills
              </Title>
              <Space h="md" />
              <div>
                <Title order={5} style={{ color: "white" }}>
                  Next.js
                </Title>
                <Progress color="violet" radius="xs" value={90} animate />
              </div>
              <Space h="sm" />
              <div>
                <Title order={5} style={{ color: "white" }}>
                  Illustrator
                </Title>
                <Progress color="violet" radius="xs" value={80} animate />
              </div>
              <Space h="sm" />
              <div>
                <Title order={5} style={{ color: "white" }}>
                  Photoshop
                </Title>
                <Progress color="violet" radius="xs" value={70} animate />
              </div>
              <Space h="sm" />
              <div>
                <Title order={5} style={{ color: "white" }}>
                  Supabase
                </Title>
                <Progress color="violet" radius="xs" value={70} animate />
              </div>
              <Space h="sm" />
              <div>
                <Title order={5} style={{ color: "white" }}>
                  Firebase
                </Title>
                <Progress color="violet" radius="xs" value={60} animate />
              </div>
              <Space h="sm" />
              <div>
                <Title order={5} style={{ color: "white" }}>
                  Gatsby.js
                </Title>
                <Progress color="violet" radius="xs" value={50} animate />
              </div>
              <Space h="sm" />
              <div>
                <Title order={5} style={{ color: "white" }}>
                  Node (Express)
                </Title>
                <Progress color="violet" radius="xs" value={50} animate />
              </div>
            </div>
          </div>
        </div>
        <Space h="lg" />
        <Title
          order={1}
          align="center"
          style={{
            fontSize: isTabletOrMobile ? 40 : 100,
            fontStretch: "150%",
            backgroundColor: "black",
            color: "white",
          }}
        >
          CONTACT ME
        </Title>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // flexDirection: "column",
            marginTop: 50,
          }}
          className="bg1"
        >
          <div
            style={{
              // backgroundColor: "black",
              backgroundImage:
                "linear-gradient(90deg, rgba(226,94,98,1) 0%, rgba(181,83,201,1) 100%)",
              // height: 300,
              padding: 3,
              maxWidth: 500,
              width: "90%",
              // marginRight: 50,
            }}
          >
            <div style={{ padding: 30, backgroundColor: "black" }}>
              <form onSubmit={sendEmail} ref={formRef}>
                <TextInput
                  placeholder="Your email"
                  label="Email Address"
                  name="email"
                  required
                  radius={0}
                  icon={<Mail size={16} />}
                  {...form.getInputProps("email")}
                />
                <Space h="lg" />
                <TextInput
                  placeholder="Your name"
                  label="Full Name"
                  name="name"
                  // required
                  radius={0}
                  icon={<UserCircle size={16} />}
                  required
                  {...form.getInputProps("name")}
                />
                <Space h="lg" />
                <TextInput
                  placeholder="Subject"
                  label="Subject"
                  name="subject"
                  // required
                  radius={0}
                  icon={<Paperclip size={16} />}
                  required
                  {...form.getInputProps("subject")}
                />
                <Space h="lg" />
                <Textarea
                  placeholder="Your message"
                  label="Message"
                  name="message"
                  required
                  radius={0}
                  minRows={5}
                  autosize
                  {...form.getInputProps("message")}
                />
                <Space h="lg" />
                <Button
                  variant="gradient"
                  gradient={{ from: "pink", to: "grape", deg: 105 }}
                  radius={0}
                  fullWidth
                  leftIcon={<Send size={16} />}
                  type="submit"
                >
                  Send
                </Button>
              </form>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "black",
            marginTop: 50,
            marginLeft: -16,
            marginRight: -16,
            marginBottom: -16,
            padding: 30,
            height: 200,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="bg2"
        >
          <Text color="white" size="xl">
            Thanks for considering employing me! If I didn't meet your
            requirments, I wish you the best in finding your perfect match.
          </Text>
        </div>
      </AppShell>
    </MantineProvider>
  );
}
