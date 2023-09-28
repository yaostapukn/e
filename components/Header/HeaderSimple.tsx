'use client'
// static
import styles from './HeaderSimple.module.css'
import HeaderLogo from '../../public/logo.svg'
// next
import Image from 'next/image'
import Link from 'next/link'
// mantine
import { Group, Box, Burger, Drawer, Container, ThemeIcon } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

import { IconHomeShare } from '@tabler/icons-react'

export default function HeaderSimple() {
  const links = [
    { link: '/', label: 'Новое', icon: <IconHomeShare /> },
    { link: '/sale', label: 'Скидки' },
    { link: '/category', label: 'Категории' },
    { link: '/me', label: 'О нас' },
    { link: '/menu', label: 'Электронное меню' },
  ]
  
  const [burgerOpened, { toggle: toggleBurger, close: closeBurger }] =
    useDisclosure(false)

  const items = links.map((el, index) => (
    <Link href={el.link} key={index}>
      {el.label}
    </Link>
  ))

  const itemsBurger = links.map((el, index) => (
    <div key={index} className={styles.links}>
      <div>{el?.icon}</div>

      <div>
        <Link href={el.link} onClick={closeBurger}>
          {el.label}
        </Link>
      </div>
    </div>
  ))
  return (
    <Box>
      <header>
        <Container fluid className={styles.inner}>
          <Link href={'/'}>
            <Image src={HeaderLogo} alt="Едадед" width={180} height={100} />
          </Link>

          <Box fz={'xl'} className={styles.links} visibleFrom="sm">
            <Group justify="space-between">{items}</Group>
          </Box>

          <Box hiddenFrom="sm">
            <Burger opened={burgerOpened} onClick={toggleBurger} />
          </Box>

          <Drawer
            opened={burgerOpened}
            onClose={closeBurger}
            overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
          >
            {itemsBurger}
          </Drawer>
        </Container>
      </header>
    </Box>
  )
}
