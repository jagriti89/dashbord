import React ,{PureComponent}from 'react'
import { FcCurrencyExchange,FcBearish ,FcViewDetails,FcMoneyTransfer} from "react-icons/fc";
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Pie, PieChart } 
 from 'recharts';
 
//const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

function Home() {
  
const data01 = [
  { name: 'JAN', value: 400 },
  { name: 'FEB', value: 300 },
  { name: 'MAR', value: 300 },
  { name: 'APR', value: 200 },
  { name: 'MAY', value: 278 },
  { name: 'JUN', value: 189 },
  { name: 'JUL', value: 189 },
  { name: 'AUG', value: 189 },
  { name: 'SEP', value: 189 },
  { name: 'OCT', value: 189 },
  { name: 'NOV', value: 189 },
  { name: '', value: 189 },
];



  

    const data = [
        {
          name: 'Jan',
        },
        {
          name: 'feb',
        },
        {
          name: 'Mar',
        },
        {
          name: 'Apr',
        },
        {
          name: 'may',
        },
        {
          name: 'Jun',
          
        },
        {
          name: 'July',
          uv: 3490,
          pv: 4300,
          
          
        },
        {
          name: 'Aug',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
        {
          name: 'Sep',
          
        },
        {
          name: 'Oct',
          
        },
        {
          name: 'Nov',
          
        },
        {
          name: 'Dec',
          
        },
      ];
     

  return (
    <main className='main-container'>
        <div className='main-title'>
            <h3>DASHBOARD</h3>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                <FcCurrencyExchange className='card_icon'/>
                    <span>    Earning
                    <h3>$198K</h3>
                    37.8%INC this month</span> 
                </div>
                
            </div>

            <div className='card'>
                <div className='card-inner'>
                <FcViewDetails className='card_icon'/>
                  <span>      order
                    <h3>$ 2.4K</h3>
                    2%DEC this month</span> 
                </div>
            </div>
            <div className='card'>
                <div className='card-inner'>
                <FcMoneyTransfer className='card_icon'/>

                       <span>   Balance
                    <h3>$ 2.4K</h3>
                    2%DEC this month</span> 
                </div>
               
            </div>
            <div className='card'>
                <div className='card-inner'>
                
                <FcBearish className='card_icon'/>
                    <span>Total shale
                    <h3>$89K</h3>
                    11%INC this month</span>  
                </div>
                
            </div>
        </div>

        <div className='charts'>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
                
            </ResponsiveContainer>
            <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data01}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
            </div>
    </main>
  )
}

export default Home
