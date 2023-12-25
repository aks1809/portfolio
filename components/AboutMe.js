import {
  SimpleGrid,
  Text,
  Stack,
  Heading,
  Image,
  Flex,
  Box,
  chakra,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
} from '@chakra-ui/react'

import useMediaQuery from '../hook/useMediaQuery'
import SlideUpWhenVisible from '../hook/SlideUpWhenVisible'
import ReactGA from 'react-ga4'

export default function AboutMe() {
  const isLargerThan800 = useMediaQuery(800)
  const handleHover = (event) => {
    ReactGA.event({
      category: 'hover',
      action: event,
    })
  }
  const MoreInfo = ({ text, content }) => {
    return (
      <>
        {' '}
        {isLargerThan800 ? (
          <Popover trigger="hover" placement="right" isLazy>
            <PopoverTrigger>
              <chakra.span
                onMouseOver={() => handleHover(`about_${text}`)}
                color="button1"
                cursor="help"
              >
                {text}
              </chakra.span>
            </PopoverTrigger>
            <PopoverContent bg="secondary" borderColor="button1" color="white">
              <PopoverArrow bg="button1" />
              <PopoverBody fontSize="sm" color="textPrimary">
                {content}
              </PopoverBody>
            </PopoverContent>
          </Popover>
        ) : (
          <Text as="span" color="button1">
            {text}
          </Text>
        )}{' '}
      </>
    )
  }

  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
        <SlideUpWhenVisible>
          <Stack spacing={4}>
            <Heading fontFamily="Ubuntu" fontSize="2xl">
              ⚡ About Me: Code, Automation, and a Dash of Fun ✨
            </Heading>
            <Text
              color="textSecondary"
              fontSize={{ base: '14px', md: '16px' }}
              whiteSpace="pre-line"
            >
              I'm {' '}
              <MoreInfo
                text="Akshay Chaturvedi"
                content="Always on the lookout for new coding challenges and learning opportunities."
              />, a code enthusiast since my early days glued to a screen. My passion lies in harnessing the power of code to create awesome things and automate away the mundane. Whether it's crafting engaging{' '}
              <MoreInfo
                text="web apps"
                content="Built a full-stack e-commerce platform for a local business, increasing sales by 20%."
              />{' '}or designing sleek{' '}
              <MoreInfo
                text="mobile experiences"
                content="Exploring Flutter for future mobile projects."
              />, I thrive on turning digital possibilities into reality.
              <br />
              <br />
              But code isn't my only language. When I'm not slinging pixels and logic, you'll find me:
              <br />
              <br />
              <ul>
                <li>
                  <MoreInfo
                    text="Conquering challenges with friends in the virtual realm (games are a serious business!)."
                    content="Always up for a friendly competition (and maybe a little trash talk)."
                  />
                </li>
                <li>
                  <MoreInfo
                    text="Unwinding with a good Netflix show (recommendations welcome!)."
                    content="Top picks: Stranger Things, Friends and Black Mirror."
                  />
                </li>
                <li>
                  <MoreInfo
                    text="Aiming for the top corner like Messi's free kicks (especially when my precision hits peak levels!)."
                    content="Goal machine: Give me a chance, and the back of the net awaits."
                  />
                </li>
              </ul>
              <br />
              <br />
              This website is where my code comes to life, showcasing my passion for building and automating.
              <br />
              <br />
              So, welcome! Join me in exploring the world of code, one project at a time. Maybe we can even build something awesome together.
              <br />
              When I'm not coding I tend to bake 🎂, take walk, listen to music 🎧 or play football! ⚽
            </Text>
          </Stack>
        </SlideUpWhenVisible>
        <SlideUpWhenVisible>
          <Flex alignItems="center" justifyContent="center" position="relative">
            <Box
              maxW={{ base: '300px', lg: '350px' }}
              maxH={{ base: '300px', lg: '350px' }}
            >
              <Image
                src="https://svgsilh.com/svg/26432.svg"
                filter="invert(0.1)"
                zIndex={3}
                position="absolute"
                top={0}
                right={0}
                w={{ base: '100px', lg: '150px' }}
                alt=""
              />
              <Image
                src="https://ik.imagekit.io/j15vw6hsa/akshaychaturvedi.jpg?updatedAt=1703183335685"
                w={{ base: '300px', lg: '350px' }}
                h={{ base: '300px', lg: '350px' }}
                borderRadius="50%"
                alt="Akshay Chaturvedi"
              />
            </Box>
          </Flex>
        </SlideUpWhenVisible>
      </SimpleGrid>
    </>
  )
}
