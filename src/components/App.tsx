import { useState } from "react"
import {
    useBreakpointValue,
    Box,
    Flex,
    Text,
    Image,
    Button,
    Card,
    CardHeader,
    Heading,
    CardBody,
    Stack,
    VStack,
    HStack,
    Link,
} from "@chakra-ui/react"
import NextLink from "next/link"

import Header from "./Header/Header"
import Footer from "./Footer"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBolt, faHouse, faHouseChimney, faLaptop, faMicrochip, faR, faRocket } from "@fortawesome/free-solid-svg-icons"
import { IconDefinition } from "@fortawesome/fontawesome-svg-core"

const App = () => {
    const SummaryCard = ({ title, description, icon }: { title: string; description: string; icon: IconDefinition }) => {
        return (
            <Card borderRadius={200} px={10}>
                <CardHeader>
                    <VStack gap={3}>
                        <FontAwesomeIcon icon={icon} size={"2x"} />
                        <Heading size="md">{title}</Heading>
                    </VStack>
                </CardHeader>
            </Card>
        )
    }

    const ResearchCard = ({ title, variant }: { title: string; variant: string }) => {
        return (
            <Card borderRadius={0} pl={{ base: 0, md: 5 }} pr={{ base: 0, md: 5 }} minW={"100%"} variant={variant}>
                <CardHeader>
                    <Flex gap={3} textAlign="left" alignItems={"center"}>
                        <Image src={"./images/PortalIcon.png"} alt={"Portal Bullet"} objectFit="contain" w={"25px"} />
                        <Heading size="md">{title}</Heading>
                    </Flex>
                </CardHeader>
            </Card>
        )
    }

    return (
        <Box minH="100vh" className={"bgPage"} display="flex" flexDirection="column">
            <Flex direction="column" justifyContent="center" alignItems="center">
                <Header />
                <Flex direction={"column"} alignItems={"center"} maxW={"1400px"} px={{ base: "0px", sm: "2vw", xl: "3vw", "2xl": "3vw" }}>
                    <Box height={30} />
                    <Flex
                        className="hero-container"
                        justifyContent={"center"}
                        alignItems={"center"}
                        borderRadius={200}
                        py={{ base: 10, md: 5 }}
                        px={{ base: 10, lg: 10 }}
                        mx={10}
                        gap={10}
                    >
                        {useBreakpointValue({ base: false, md: true }) && (
                            <Box display="flex" justifyContent="center" alignItems="center" minW={"200px"}>
                                <Image
                                    display={{ base: "none", sm: "block" }}
                                    src={"./images/EthPortalNetworkLogo.png"}
                                    alt={"Cover Image"}
                                    objectFit="contain"
                                    boxSize={"200px"}
                                    borderRadius={"100%"}
                                    my={4}
                                />
                            </Box>
                        )}
                        <Box flex={1} display="flex" flexDirection="column" justifyContent="center" alignItems="center" gap={{ base: 3, md: 10 }}>
                            <Text fontWeight={"extrabold"} fontSize={{ base: "3xl", md: "5xl" }} textAlign={"center"}>
                                Ethereum Portal Network
                            </Text>
                            <Text fontWeight={"bold"} fontSize={{ base: "medium", md: "1xl" }} pt={2} px={5} textAlign={"center"}>
                                A Research and Development Project for Decentralized Ethereum Light Clients
                            </Text>
                        </Box>
                    </Flex>
                    <Box p={10}>
                        <Text fontWeight={"semibold"} fontSize={"lg"} textAlign={"center"}>
                            The Portal Network aims to build a decentralized peer-to-peer network that enables lightweight protocol access to the
                            Ethereum protocol.
                        </Text>
                        <Flex gap={5} py={10} wrap={"wrap"} justifyContent={"center"} alignItems={"center"}>
                            <SummaryCard
                                title={"Fast syncing"}
                                description={"View a summary of all your clients over the last month."}
                                icon={faRocket}
                            />
                            <SummaryCard
                                title={"Basic hardware"}
                                description={"View a summary of all your clients over the last month."}
                                icon={faLaptop}
                            />
                            <SummaryCard
                                title={"Residential internet"}
                                description={"View a summary of all your clients over the last month."}
                                icon={faHouseChimney}
                            />
                        </Flex>
                        <Text fontWeight={"semibold"} textAlign={"center"}>
                            Clients for this network will be able to enter the network and retrieve arbitrary data within a few seconds. Light clients
                            can sync fast, run on resource-low hardware and use less bandwidth.
                        </Text>
                        <Flex justifyContent={"center"} alignItems={"center"} w={"100%"} pb={5}>
                            <Flex wrap={"wrap"} justifyContent={"space-around"} w={"100%"}>
                                <Box position="relative" w={{ base: "300px", md: "400px" }} my={4}>
                                    <Image
                                        src={"./images/BluePortal.png"}
                                        alt={"Blue Portal"}
                                        objectFit="contain"
                                        w={{ base: "300px", md: "400px" }}
                                        borderRadius={"100%"}
                                    />
                                    <Text
                                        position="absolute"
                                        textAlign={"center"}
                                        top="50%"
                                        left="50%"
                                        transform="translate(-50%, -50%)"
                                        fontWeight="bold"
                                    >
                                        The Future is here...
                                    </Text>
                                </Box>
                                <Box position="relative" w={{ base: "300px", md: "400px" }} my={4}>
                                    <Image
                                        src={"./images/OrangePortal.png"}
                                        alt={"Blue Portal"}
                                        objectFit="contain"
                                        w={{ base: "300px", md: "400px" }}
                                        borderRadius={"100%"}
                                    />
                                    <Text
                                        position="absolute"
                                        textAlign={"center"}
                                        top="50%"
                                        left="50%"
                                        transform="translate(-50%, -50%)"
                                        fontWeight="bold"
                                    >
                                        ...it&apos;s just not evenly distributed
                                    </Text>
                                </Box>
                            </Flex>
                        </Flex>
                        <Text fontWeight={"semibold"} textAlign={"center"}>
                            To keep decentralizing Ethereum, the Portal Network has to overcome many challenges:
                        </Text>
                        <VStack textAlign={"left"} align="center">
                            <Flex direction={"column"} gap={0} py={10} wrap={"wrap"} maxW={"fit-content"}>
                                <Box borderTopRadius={50} overflow={"hidden"}>
                                    <ResearchCard title={"Reduce hardware and bandwidth requirements"} variant={""} />
                                </Box>
                                <ResearchCard title={"No dependency on full nodes"} variant={"darkCard"} />
                                <ResearchCard title={"Individually tunable resource requirements"} variant={""} />
                                <ResearchCard title={"Support for known retrieval patterns"} variant={"darkCard"} />
                                <Box borderBottomRadius={50} overflow={"hidden"} w={"100%"}>
                                    <ResearchCard title={"No centralization points"} variant={""} />
                                </Box>
                            </Flex>
                        </VStack>
                        <Box>
                            <Box pl={{ base: 0, md: 10 }}>
                                <Text fontSize={"3xl"} fontWeight={"bold"} pb={3}>
                                    FAQ
                                </Text>
                                <Flex direction={"column"} gap={2} pb={10}>
                                    <Link as={NextLink} href="#faq-what-is-portal" fontWeight={"semibold"}>
                                        What is the Portal?
                                    </Link>
                                    <Link as={NextLink} href="#faq-why-portal" fontWeight={"semibold"}>
                                        Why do we need the Portal network?
                                    </Link>
                                    <Link as={NextLink} href="#faq-financial-incentives" fontWeight={"semibold"}>
                                        Why aren't there financial incentives?
                                    </Link>
                                    <Link as={NextLink} href="#faq-contribute" fontWeight={"semibold"}>
                                        How can you help contribute to ETH Portal Network development?
                                    </Link>
                                    <Link as={NextLink} href="#faq-json-rpc" fontWeight={"semibold"}>
                                        What happened to the original JSON-RPC API-based Portal Network use case?
                                    </Link>
                                </Flex>
                            </Box>
                            <Flex direction={"column"} gap={10}>
                                <Flex id="faq-what-is-portal" className="faq-container" direction={"column"} gap={5} p={10} borderRadius={50}>
                                    <Text fontWeight={"bold"} fontSize={"2xl"}>
                                        What is the Portal?
                                    </Text>
                                    <Text>
                                        "Portal " is an in-progress effort to enable lightweight protocol access to resource-constrained devices. The
                                        term "portal" indicates that these networks provide a view into the protocol but are not critical to the
                                        operation of the core Ethereum protocol.
                                    </Text>
                                    <Text>
                                        The Portal Network will be comprised of one or more decentralized peer-to-peer networks which together provide
                                        the data and functionality necessary to expose the standard JSON-RPC API. These networks are being specially
                                        designed to ensure that clients participating in these networks can do so with minimal expenditure of
                                        networking bandwidth, CPU, RAM, and HDD resources.
                                    </Text>
                                </Flex>
                                <Flex id="faq-why-portal" className="faq-container" direction={"column"} gap={5} p={10} borderRadius={50}>
                                    <Text fontWeight={"bold"} fontSize={"2xl"}>
                                        Why do we need the Portal network?
                                    </Text>
                                    <Text>This effort is motivated by two overlapping goals.</Text>
                                    <Flex direction={"column"} gap={3} p={5} borderRadius={10} className="bgPage">
                                        <Text fontWeight={"semibold"} fontSize={"lg"}>
                                            Full Functionality for Stateless Clients
                                        </Text>
                                        <Text>
                                            The core Ethereum protocol is moving towards a "stateless" model of block verification. Under this model a
                                            client will be able to fully verify the execution of a block using a witness. Such a client would no
                                            longer need to keep or maintain any of the Ethereum "state" data. Such a client is very valuable in the
                                            context of the core protocol, as it facilitates a cleaner merge of the Eth1 and Eth2 chains.
                                            <br />
                                            <br />
                                            <Link as={NextLink} href="https://dankradfeist.de/ethereum/2021/02/14/why-stateless.html" target="_blank">
                                                Additional reading on why stateless is so important to the Eth1/Eth2 merge.
                                            </Link>
                                        </Text>
                                    </Flex>
                                    <Flex direction={"column"} gap={3} p={5} borderRadius={10} className="bgPage">
                                        <Text fontWeight={"semibold"} fontSize={"lg"}>
                                            Scalable Lightweight Clients
                                        </Text>
                                        <Text>
                                            The term "light client" tends to refer to a client of the existing DevP2P LES network. This network is
                                            designed using a client/server architecture. The LES network has a total capacity dictated by the number
                                            of "servers" on the network. In order for this network to scale, the "server" capacity has to increase.
                                            This also means that at any point in time the network has some total capacity which if exceeded will cause
                                            service degradation across the network. Because of this the LES network is unreliable when operating near
                                            capacity.
                                        </Text>
                                        <Text>
                                            The Portal Network aims to solve this problem by designing our networks so that each additional client
                                            that joints the network adds additional capacity to the network. The end result should be a network which
                                            becomes more robust and powerful as more nodes join the network.
                                        </Text>
                                    </Flex>
                                </Flex>
                                <Flex id="faq-financial-incentives" className="faq-container" direction={"column"} gap={5} p={10} borderRadius={50}>
                                    <Text fontWeight={"bold"} fontSize={"2xl"}>
                                        Why aren't there financial incentives?
                                    </Text>
                                    <Flex direction={"column"} gap={3} p={5} borderRadius={10} className="bgPage">
                                        <Text>TLDR: Incorrectly implemented incentives lead to perverse incentives.</Text>
                                    </Flex>
                                    <Text>
                                        Using financial incentives is a natural choice for many crypto/blockchain protocols. Well-designed incentives
                                        can be a powerful tool to encourage proper use and discourage malicious behaviour. Incentives might seem
                                        especially well-suited for the Portal Network, where the strength of the network is correlated to the number
                                        of participants and the amount of contributed computing resources. However, at the current point in time,
                                        Portal Network developers have opted out of implementing financial incentives.
                                    </Text>
                                    <Text>
                                        The problem with financial incentives is they are complex and difficult to implement correctly. They also
                                        provide mechanisms for people to game the system and extract value rather than contribute towards overall
                                        network health. The Portal Network relies on producing a useful, lightweight client for developers, along with
                                        altruism and laziness, to encourage network adoption and sufficient computing resources.
                                    </Text>
                                    <Flex direction={"column"} gap={3} p={5} borderRadius={10} className="bgPage">
                                        <Text>"Never underestimate the power of laziness and software defaults" - Piper</Text>
                                    </Flex>
                                    <Text>
                                        Protocols like BitTorrent and IPFS are proof that this is a feasible strategy. Furthermore, protocols like
                                        Filecoin and The Graph Network already exist that use financial incentives to accomplish similar goals to the
                                        Portal Network.
                                    </Text>
                                </Flex>
                                <Flex id="faq-contribute" className="faq-container" direction={"column"} gap={5} p={10} borderRadius={50}>
                                    <Text fontWeight={"bold"} fontSize={"2xl"}>
                                        How can you help contribute to ETH Portal Network development?
                                    </Text>
                                    <Text>
                                        The ETH Portal Network development effort is an open, multi-team effort. If you're interested in helping
                                        contribute towards the design and implementation, join the ongoing discussion happening on the{" "}
                                        <Link as={NextLink} href="https://discord.gg/EquAzZ9UT" target="_blank">
                                            Discord server
                                        </Link>
                                        . There is also a weekly call Mondays @ 15.30 UTC, where we discuss the latest developments and open
                                        questions.
                                    </Text>
                                </Flex>
                                <Flex id="faq-json-rpc" className="faq-container" direction={"column"} gap={5} p={10} borderRadius={50}>
                                    <Text fontWeight={"bold"} fontSize={"2xl"}>
                                        What happened to the original JSON-RPC API-based Portal Network use case?
                                    </Text>
                                    <Text>
                                        The original pitch for Portal focused on delivering a network that allowed clients to serve JSON-RPC requests
                                        by fetching data on demand from Portal. Recently we've come to understand that this use case will likely be
                                        difficult based on network latencies, forcing us to re-evaluate our roadmap.
                                    </Text>
                                    <Text>
                                        Portal is still building the same functionality needed to serve JSON-RPC but we expect the performance of the
                                        initial versions of the network to be too slow to compete with centralized providers.
                                    </Text>
                                </Flex>
                            </Flex>
                        </Box>
                    </Box>
                </Flex>
            </Flex>
            <Box flex="1" />
            <Footer />
        </Box>
    )
}

export default App
