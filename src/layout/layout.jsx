import React, { useState } from 'react';
import Switcher from '../components/switcher';
import { Link, Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Drawer, FormControl, IconButton, InputLabel, List, ListItem, ListItemText, MenuItem, Select } from '@mui/material';
import logo from "../assets/Logo.png";
import MenuIcon from '@mui/icons-material/Menu';
import limon from "../assets/limon.png"
import insta from "../assets/insta.png"
import facebook from "../assets/facebook.png"
import twitter from "../assets/twter.png"
import printres from "../assets/printress.png"

const Layout = () => {
  const { i18n, t } = useTranslation();
  const [lang, changeLang] = useState("tj");
  const [open, setOpen] = useState(false); 

  function handleChange(event) {
    changeLang(event.target.value);
    i18n.changeLanguage(event.target.value);
  }

  const toggleDrawer = (open) => () => {
    setOpen(open);
  };

  const handleMenuItemClick = () => {
    setOpen(false); // Закрытие Drawer при клике на элемент меню
  };

  const menuItems = (
    <List>
      <ListItem button onClick={handleMenuItemClick}>
        <Link to={"/"}>
          <ListItemText primary={t("Home")} /> 
        </Link> 
      </ListItem>
      <ListItem button onClick={handleMenuItemClick}>
        <Link to={"about"}>
          <ListItemText primary={t("About")} />
        </Link>
      </ListItem>
      <ListItem button onClick={handleMenuItemClick}>
        <Link to={"shop"}>
          <ListItemText primary={t("Shop")} />
        </Link>
      </ListItem>
      <ListItem button onClick={handleMenuItemClick}>
        <Link to={"portfolio"}>
          <ListItemText primary={t("Portfolio")} />
        </Link>
      </ListItem>
      <ListItem button onClick={handleMenuItemClick}>
        <Link to={"team"}>
          <ListItemText primary={t("Team")} />
        </Link>
      </ListItem>
      <ListItem button onClick={handleMenuItemClick}>
        <Link to={"serviseSingle"}>
          <ListItemText primary={t("Service Single")} />
        </Link>
      </ListItem>
    </List>
  );

  return (
    <div className='dark:bg-[black] bg-[white]'>
      <div className='flex items-center justify-between p-[20px]'>
        <div className='flex items-center gap-4 lg:gap-10'>
          <div className='w-[100px] lg:w-[200px] '>
            <img src={logo} alt="" />
          </div>
          <ul className=' gap-4 font-bold text-[#274C5B] hidden md:flex md:dark:text-[white]'>
            <Link to={"/"}>
              <li className='cursor-pointer'>{t("Home")}</li>
            </Link>
            <Link to={"about"}>
              <li className='cursor-pointer'>{t("About")}</li>
            </Link>
            <Link to={"shop"}>
              <li className='cursor-pointer'>{t("Shop")}</li>
            </Link>
            <Link to={"portfolio"}>
              <li className='cursor-pointer'>{t("Portfolio")}</li>
            </Link>
            <Link to={"team"}>
              <li className='cursor-pointer'>{t("Team")}</li>
            </Link>
            <Link to={"serviseSingle"}>
              <li className='cursor-pointer'>{t("Service Single")}</li>
            </Link>

          </ul>
          <div className='md:hidden'>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)} className='dark:text-[white] text-[black]'>
              <MenuIcon />
            </IconButton>
          </div>
        </div>
        <div className='flex items-center gap-5 py-2'>
          <Switcher />
          <FormControl size='small' >
            <InputLabel id="demo-simple-select-label"></InputLabel>
            <Select
              variant='outlined'
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={lang}
              onChange={handleChange}
              className='dark:text-[white] text-[black]'
              sx={{
                border: '1px solid white',
                '& .MuiSelect-icon': {
                  color: 'grey', // Изменение цвета иконки стрелки
                },
              }}
            >
              <MenuItem value="ru">rus</MenuItem>
              <MenuItem value="tj">taj</MenuItem>
              <MenuItem value="en">eng</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <div>
        {/*тана */}
        <Outlet />
      </div>
      <div className='footer my-[100px] lg:grid lg:grid-cols-3 lg:items-center'>
          <div className='text-center dark:text-[white]'>
            <h2>Contact Us</h2>
            <p>Email</p>
            <p>needhelp@Organia.com</p>
            <p>Phone</p>
            <p>666 888 888</p>
            <p>Adress</p>
            <p>88 road, borklyn street, USA</p>
          </div>
          <div>
            <div className='flex justify-center items-center py-4'><img src={logo} alt=""  className='w-[200px]'/></div>
            <p className='text-center py-4 dark:text-[white]'>Simply dummy text of the printing and typesetting industry.
            Lorem Ipsum simply dummy text of the printing </p>
            <div>
              <div className='flex items-center justify-center gap-4 py-4'>
                <img src={insta} alt=""  className='w-[60px]'/>
                <img src={facebook} alt="" />
                <img src={twitter} alt="" />
                <img src={printres} alt="" />
              </div>
            </div>
            <hr />
          </div>
          <div className='text-center py-4 dark:text-[white]'>
            <h2>Utility Pages</h2>
            <p>404 Not Found
            </p>
            <p>Password Protected
            </p>
            <p>Licences</p>
            <p>Changelog</p>
          </div>
      </div>
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        {menuItems}
      </Drawer>
    </div>
  );
};

export default Layout;
