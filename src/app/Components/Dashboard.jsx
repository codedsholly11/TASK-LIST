import React from 'react'

const Dashboard = () => {
  return (
    <div className='w-[100%] h-[100vh]'>
        <div>
            <div className='flex flex-col items-center  gap-[60px]'>
                <div className=' flex flex-col gap-[30px]'>
                    <h1 className='text-4xl font-bold'>Welcome User</h1>
                    <p>manage all your task easily.</p>
                </div>
              <div className='flex gap-[80px] items-center justify-center'>
                    <div className='w-[300px] h-[300px] border-2 border-[hsl(241,33%,62%)] bg-[#74c0fc] rounded-xl'>
                        <h1 className='text-2xl font-semibold '>Completed</h1>
                        <p>shhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</p>
                    </div>
                    <div className='w-[300px] h-[300px] border-2 border-[#66cd00] bg-[#d8f5a2] rounded-xl'>
                        <h1 className='text-2xl font-semibold '>In-Progress</h1>
                        <p>duiguiopopo n njnjljvhvhvjhxcv</p>
                    </div>
                    <div className='w-[300px] h-[300px] border-2 border-[#66cd00] bg-[#fecaca] rounded-xl'>
                        <h1 className='text-2xl font-semibold'>Review</h1>
                        <p>hgehghgvhwehhwch cqsqnh;r;;h cnc s</p>
                    </div>
              </div>
            </div>
            <div className=''>
                <h1 className='text-4xl font-bold text-center py-[30px]'>Resent Task-List</h1>
            <div className='flex items-center justify-around'>
                <div>
                    <h2 className='text-2xl font-bold'>Todo</h2>
                </div>
                <div>
                    <h2 className='text-2xl font-bold'>Status</h2>
                </div>
                <div>
                    <h2 className='text-2xl font-bold'>Date</h2>
                </div>
                <div>
                    <h2 className='text-2xl font-bold'>Manager</h2>
                </div>
             </div>
            </div>
        </div>
      
    </div>
  )
}

export default Dashboard
