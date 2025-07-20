import React, { useEffect, useState } from 'react';
import { getReadItemsFromLs } from '../Utility/localStorage';
import { ResponsiveContainer,BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip,Scatter} from 'recharts';
import { useLoaderData } from 'react-router';

const PagesToRead = () => {
    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

    const books=useLoaderData();
    const [readListBooks,setReadListBooks]=useState([]);

    useEffect(()=>{
        const readBooks=getReadItemsFromLs();
        const booklists=books.filter(itemId=>readBooks.includes(itemId.id))
        console.log(booklists);
        setReadListBooks(booklists);
        
    },[]);

    console.log(readListBooks);

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
      };

      const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;
      
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
      };
    
    return (
        <div className='text-center text-3xl font-bold py-5 container mx-auto'>

         <ResponsiveContainer width="100%"
      height={600}>
         <BarChart width={800}
      height={600}
      className=''
      
      data={readListBooks}
      margin={{
        top: 10,
        right: 10,
        left: 10,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis className='text-xl font-[Work Sans] font-medium' dataKey="name" />
      <YAxis className='text-xl font-[Work Sans] font-medium' />
      <Bar className='font-[playfair-display] text-2xl' dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
    
        {readListBooks.map((entry, index) => (
          <Cell  key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>   
      
       </BarChart>

          </ResponsiveContainer>  
          
     
        </div>
    );
};

export default PagesToRead;