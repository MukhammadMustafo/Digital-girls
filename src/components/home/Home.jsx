import React, { useEffect, useState } from 'react'
import './Home.scss'
import Logo from '../../assets/image/header__logo.png'
import Image1 from '../../assets/image/image1.png'
import Image2 from '../../assets/image/image2.png'
import Image3 from '../../assets/image/image3.png'
import Image4 from '../../assets/image/image4.png'
import Mask1 from '../../assets/image/mask1.png'
import Mask2 from '../../assets/image/mask2.png'
import Mask3 from '../../assets/image/mask3.png'
import Mask4 from '../../assets/image/mask4.png'
import Mask5 from '../../assets/image/mask5.png'
import Mask6 from '../../assets/image/mask6.png'
import Mask21 from '../../assets/image/mask21.png'
import Mask22 from '../../assets/image/mask22.png'
import Mask23 from '../../assets/image/mask23.png'
import Mask24 from '../../assets/image/mask24.png'
import Mask25 from '../../assets/image/mask25.png'
import Insta from '../../assets/image/insta.png'
import tg from '../../assets/image/tg.png'
import yt from '../../assets/image/yt.png'
import face from '../../assets/image/face.png'
import Fiolet2 from '../../assets/image/fiolet2.png'
import { Link } from 'react-router-dom'


function Home() {
  const [value, setValue] = useState(false)
  

  const dataCateg = [
    {
      id:1,
      lanRU: 'О проекте',
      lanUZ: 'Proekt'
    },
    {
      id:2,
      lanRU: 'Направления',
      lanUZ: 'Navigate'
    },
    {
      id:3,
      lanRU: 'Задачи',
      lanUZ: 'Exems'
    },
    {
      id:4,
      lanRU: 'Результаты',
      lanUZ: 'Result'
    },
    {
      id:5,
      lanRU: 'Контакты',
      lanUZ: 'Contact'
    }
  ]
  const langu = ((e)=>{
    window.localStorage.setItem('lan', e.target.value)
    setLan(window.localStorage.getItem('lan'))
  })
  const [lann, setLan] = useState(window.localStorage.getItem('lan') ? window.localStorage.getItem('lan') : 'RU')
  const [id, setId] = useState(0)
  
  return (
    <>
      <div>
        <div className="header">
          <div className="container">
            <div className="header__inner" >
              <Link to='/'>
                <div>
                  <img src={Logo} alt="" />
                  <h2>Girls in Digital </h2>
                </div>
              </Link>
              <div>
                <ul className='ul__proekt'>
                  {
                    dataCateg?.map((e,i)=>(
                      <a href={id ? `#${id}`: ''}>
                        <li key={e.id} onClick={()=> setId(e.id)}>{e[`lan${lann}`]}</li>
                      </a>
                    ))
                  }
                </ul>
                <select onChange={langu}>
                  <option value='RU'>РУ</option>
                  <option value='UZ'>UZ</option>
                </select>
                <a href="#registratsiya">
                  <button>Регистрация</button>
                </a>

                <label htmlFor="nav-button" className='nav-button' onClick={()=> setValue(!value)}>
                  <span className={value == true? 'span__menu spancha' : 'span__menu'}></span>
                </label>



              </div>
              <ul className={value == true? 'ul__menu' : 'ul__none'} >
                  {
                    dataCateg?.map((e,i)=>(
                      <a href={id ? `#${id}`: ''}>
                        <li key={e.id} onClick={()=> {
                          setId(e.id)
                          setValue(!value)}}>{e[`lan${lann}`]}</li>
                      </a>
                    ))
                  }
                <select onChange={langu}>
                  <option value='RU' >РУ</option>
                  <option value='UZ'>UZ</option>
                </select>
                <a href="#registratsiya">
                  <button>Регистрация</button>
                </a>
              </ul>
            </div>
            <div className="header__hero">
              <div>
                <h1>“Girls in digital”</h1>
                <p>Организация курсов повышения квалификации для девушек специалистов в сфере ИТ и подготовка высоко- квалифицированных кадров</p>
                <button>Подробнее</button>
              </div>
              <img src={Fiolet2} alt="" />
            </div>
          </div>
        </div>

        <div className="main">
          <div className="container">
            <div className="main__inner" id='1'>
              <h2>О проекте</h2>
              <div className='image__left' >
                <img src={Image1} alt=""/>
                <p>Организация курсов повышения квалификации для девушек специалистов в сфере ИТ   и подготовка высококвалифицированных кадров. Дать практические навыки участникам, которые пригодятся в будущей профессиональной деятельности благодаря привлечению в процесс обучения опытных ведущих отечественных и зарубежных специалистов. Создание программы для системной развитии ИТ- сферы в республике.</p>
              </div>
              <div className='image__right'>
                <div >
                  <p>Проект “Программа обучения девушек в сфере И.Т ”  предназначен для девушек в возрасте 16-35 ,которые имеет базовые знание в сфере айти.</p>
                </div>
                <img src={Image2} alt=""/>
              </div>
            </div>
          </div>
        </div>
        <div className="main__hero" id='2'>
          <div className="container">
            <div className="hero__inner">
              <h2>Направлении</h2>
              <p>Проект будет проводится по направлениям</p>
              <div>
                <div>
                  <h4>SMM и Таргетинг, копирайтинг</h4>
                  <img src={Mask1} alt="" />
                </div>
                <div>
                  <h4>3D дизайн.</h4>
                  <img src={Mask2} alt="" />
                </div>
                <div>
                  <h4>Графический дизайн</h4>
                  <img src={Mask3} alt="" />
                </div>
                <div>
                  <h4>Логистика</h4>
                  <img src={Mask4} alt="" />
                </div>
                <div>
                  <h4>Программиро-вание</h4>
                  <img src={Mask5} alt="" />
                </div>
                <div>
                  <h4>Айти менеджмент</h4>
                  <img src={Mask6} alt="" />
                </div>
              </div>
              <button><a href="#registratsiya">Записаться</a></button>
            </div>
          </div>
        </div>

        <div className="main__second" id=''>
          <div className="container">
            <div className="second__inner">
              <div className='image__left'>
                <img src={Image3} alt="" />
                <span>
                  <p>Проект осуществляется в 4 этапа. Отбор участников проводится на основе специального анкетирования, собесодование а также анкетирование возможно на сайте проекта в режиме он-лайн. также собеседования с участием тренеров и специалистов. Привлечение участников будет производиться посредством рекламной кампании в ТВ, интернет и печатной СМИ.</p>
                </span>
              </div>
              <div className='image__right'>
                <span>
                  <p>Рабочая группа будет состоят из высококва - лифицированных тренеров-специалистов. Для полного информирования участников проекта требуется освещение через СМИ, разработка сайта и создание PR-группы. Рабочей группой будут разработаны модули, программы направлений  в проекте. </p>
                </span>
                <img src={Image4} alt=""/>
              </div>
            </div>
          </div>
        </div>

        <div className="main__third" id='3'>
          <div className="container">
            <div className="third__inner">
              <h2>Задачи</h2>
              <div>
                <div className='card-one'>
                  <p>Подбор рабочей группы</p>
                </div>
                <div className='card-two'>
                  <p>Установить контакт с партнерами</p>
                </div>
                <div className='card-three'>
                  <p>Закупка офисной техники</p>
                </div>
                <div className='card-four'>
                  <p>Привлечение опытных специалистов (зарубежные специалисты);</p>
                </div>
                <div className='card-five'>
                  <p>Разработка модуля</p>
                </div>
                <div className='card-six'>
                  <p>Освещение  проекта с помощью СМИ</p>
                </div>
                <div className='card-seven'>
                  <p>Проведение отбора участников</p>
                </div>
                <div className='card-eight'>
                  <p>Организация проекта в 4 этапа</p>
                </div>
                <div className='card-nine'>
                  <p>Организация форума и церемония награждения победителей</p>
                </div>
                <div className='card-ten'>
                  <p className='ten'>Мониторинг деятельности участников после окончание проекта, oценка эффективности проекта, составление отчетов</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="main__registr" id='registratsiya'>
          <div className="container">
            <div className="register__inner">
              <h2>Регистрация</h2>
              <div>
                <input type="text" placeholder='Имя' />
                <input type="text" placeholder='Фамилия' />
                <input type="text" placeholder='Дата рождения' />
                <input type="mail" placeholder='Почта' />
                <input type="text" placeholder='Адрес' />
                <input type="number" placeholder='Телефон' />
              </div>
              <button>Отправить</button>
            </div>
          </div>
        </div>

        <div className="main__result" id='4'>
          <div className="container">
            <div className="result__inner">
              <h2>Результаты</h2>
              <h5>Ожидаемый результат: Подготовка квалифицированных и конкурентоспособных  кадров и разработка стартапп проектов и  среди девушек</h5>
              <div>
                <div>
                  <img src={Mask21} alt="" />
                  <p>Самореализация девушек в сфере IT</p>
                </div>
                <div>
                  <img src={Mask22} alt="" />
                  <p>Выбор профессии без квалификациии дипломов</p>
                </div>
                <div>
                  <img src={Mask23} alt="" />
                  <p>Возможность зарабатывать дистанционно (фриланс)</p>
                </div>
                <div>
                  <img src={Mask24} alt="" />
                  <p>Возможность начать свои социальные проекты в виде Старт апов</p>
                </div>
                <div>
                  <img src={Mask25} alt="" />
                  <p>Маркетинговые навыки</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="main__lok" id='5'>
          <div className="container">
            <div className="lok__inner">
              <div className="lok__flex">
                <div className='web'>
                  <h4>Веб сайт</h4>
                  <h6>digitalcity.uz</h6>
                </div>
                <div className='call'>
                  <h4>Телефон</h4>
                  <h6>+99874 222-22-22</h6>
                </div>
                <div className='mail'>
                  <h4>Почта</h4>
                  <h6>dcity@info.com</h6>
                </div>
                <div className='loc'>
                  <h4>Адресс</h4>
                  <h6>улица Бобур Шох, Andizhan, Узбекистан</h6>
                </div>
              </div>
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1511.3307388984097!2d72.35916420422974!3d40.74747383987675!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf72460c2369068a8!2sDigital%20City!5e0!3m2!1sru!2s!4v1673700817543!5m2!1sru!2s" width="760" height="681" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>

        <div className="footer">
          <div className="container">
            <div className="footer__inner">
              <Link to='/'>
                <div className='dc'>
                  <img src={Logo} alt="" />
                  <h4>GIRLS IN DIGITAL</h4>
                </div>
              </Link>
              <ul>
                {
                  dataCateg?.map((e,i)=>(
                    <a href={id ? `#${id}`: ''}>
                      <li key={e.id} onClick={()=> setId(e.id)}>{e[`lan${lann}`]}</li>
                    </a>
                  ))
                }
              </ul>
              <div className='ru'>
                <span>
                  <b onClick={()=> setLan('UZ')}>Уз</b>
                  <b onClick={()=> setLan('RU')}>Ру</b>
                </span>
                <div>
                  <img className='insta' src={Insta} alt="" />
                  <img className='tg' src={tg} alt="" />
                  <img className='yt' src={yt} alt="" />
                  <img className='face' src={face} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home