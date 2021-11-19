import React from 'react'
import styled from 'styled-components'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Checkbox,
    Text,
    Container
} from "@chakra-ui/react";
const AccordionCourse = () => {
    
    return (
        <>
            <Accordion defaultIndex={[0]} allowMultiple>
                {[1, 1, 1, 1, 1, 1].map((item, index) => (
                    <>
                        <AccordionItem key={index} >
                            <h2>
                                <AccordionButton _hover={{ background: "#fff", borderRadius: "8px" }}>
                                    <Box
                                        flex='1'
                                        textAlign='left'
                                        _hover={{ background: "rgba(255, 65, 0, 0.1)", borderRadius: "8px" }}
                                        pb={2}>
                                        <Text fontSize='xl' ml={4}>
                                            {index + 1}
                                            . Introduction to react
                                        </Text>
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <Box flex='1' textAlign='left' display='flex' pl={2}>
                                    <Checkbox defaultIsChecked pl={4} />
                                    <Text fontSize='lg' ml={6}>
                                        course overview and preview
                                    </Text>
                                </Box>
                            </AccordionPanel>
                        </AccordionItem>
                    </>
                ))}
            </Accordion>
        </>
    );
}


export default AccordionCourse;
