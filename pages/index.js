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
  Alert,
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
import { useEffect, useRef, useState } from "react";

const useWindowSize = () => {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== "undefined") {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      // Add event listener
      window.addEventListener("resize", handleResize);

      // Call handler right away so state gets updated with initial window size
      handleResize();

      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
};

export default function Home() {
  const [scroll, scrollTo] = useWindowScroll();

  // const isTabletOrMobile = useMediaQuery({ maxWidth: 1000 });
  const size = useWindowSize();
  const isTabletOrMobile = size.width < 1000;

  useEffect(() => {
    console.log(size);
  }, [size]);

  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(1);
  }, [count]);

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

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

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
          form.reset();
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          console.log("Error!");
          setError(true);
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
                  <a href="https://github.com/DylPayne">
                    <BrandGithub size={28} strokeWidth={1.5} color={"white"} />
                  </a>
                </ActionIcon>
              </Tooltip>
              <Space w="md" />
              <Tooltip
                position="bottom"
                placement="end"
                gutter={10}
                label="dylan.r.payne@gmail.com"
                transitionTimingFunction="ease"
                withArrow
                transition="skew-up"
                transitionDuration={500}
                color="blue"
                closeDelay={1000}
              >
                <ActionIcon>
                  <a href="mailto:dylan.r.payne@gmail.com">
                    <Mail size={28} strokeWidth={1.5} color={"white"} />
                  </a>
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
                  <a href="https://wa.me/27794273172">
                    <BrandWhatsapp
                      size={28}
                      strokeWidth={1.5}
                      color={"white"}
                    />
                  </a>
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
          FULL STACK DEV
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
            ></Text>
            <Title order={2} style={{ fontStretch: "130%" }}>
              Hi there,
            </Title>
            <Title order={1} style={{ fontStretch: "130%" }}>
              I&apos;m Dylan
            </Title>
            <Space h="md" />
            <Text size="lg">
              I am a 21-year-old hard-working individual who went to Wynberg
              Boys High School. I am passionate about surfing, rugby, and trail
              running, and I love to spend my free time watching these sports or
              participating in them. I am also a very hard worker with a good
              work ethic, and I enjoy working around like-minded people.{" "}
            </Text>
            <br />
            <Text size="lg">
              I am a valuable asset to any team, and my dedication and
              determination are sure to lead to success. I am a team player who
              is always willing to help out, and I am always looking for ways to
              improve my skills and knowledge.{" "}
            </Text>
            <br />
            <Text size="lg">
              I am a bright and motivated individual with a bright future ahead
              of me. I am sure to achieve great things in whatever I set my mind
              to. I studied full stack development and software engineering and
              qualified as one of the best in my class.
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
              Next.js
            </Title>
            <Space h="md" />
            <Text size="lg">
              I do the majority of my front-end work with Next.js. However, I
              also have some experience with other frameworks such as Angular. I
              am also skilled in Illustrator, Photoshop and Xd.
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
              I&apos;ve used Java, Python and C# for back-end development.
              However, I am most experienced with Node.js and BAAS providers
              like Supabase and Firebase.
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
                am experienced in React, Angular, Google Firebase and Supabase.
                I also have some experience in backend development with Node.js,
                Java, Python and C#. I am also comfortable with using the Adobe
                suite. (Photoshop, Illustrator, Xd, etc.)
                <br />
                <br />I started my journey with Delphi/Pascal software about 5
                years ago, and it has been quite the journey since then. I have
                learnt multiple languages, including Python, Javascript, Java,
                SQL, PHP, C# and more.
                <br />
                <br />I studied Software Engineering and Full Stack Development
                at a college in Cape Town called Hyperiondev. There, I learned
                Javascript, Java, SQL, PHP and more.
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
                  React
                </Title>
                <Progress color="violet" radius="xs" value={90} animate />
              </div>
              <Space h="sm" />
              <div>
                <Title order={5} style={{ color: "white" }}>
                  Angular
                </Title>
                <Progress color="violet" radius="xs" value={70} animate />
              </div>
              <Space h="sm" />
              <div>
                <Title order={5} style={{ color: "white" }}>
                  Supabase
                </Title>
                <Progress color="violet" radius="xs" value={60} animate />
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
                  Node (Express)
                </Title>
                <Progress color="violet" radius="xs" value={50} animate />
              </div>
              <Space h="sm" />
              <div>
                <Title order={5} style={{ color: "white" }}>
                  ASP.NET
                </Title>
                <Progress color="violet" radius="xs" value={40} animate />
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
            <div
              style={{ padding: 30, backgroundColor: "black" }}
              id="contact-form"
            >
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
              <Space h="lg" />
              {success && (
                <Alert title="Success!" color="green">
                  Your email has been sent successfully!
                </Alert>
              )}
              {error && (
                <Alert title="Error!" color="red">
                  Please email me here: dylan.r.payne@gmail.com
                </Alert>
              )}
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
            Thanks for considering employing me! If I didn&apos;t meet your
            requirments, I wish you the best in finding your perfect match.
          </Text>
        </div>
      </AppShell>
    </MantineProvider>
  );
}
