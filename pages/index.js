import CommentedImage from '../components/Commented Image'
import CornyQuestion from '../components/Corny Question'
import RandomButton from '../components/Random Button'

import { useRef, useState } from 'react'

import {
  Button,
  Code,
  useDisclosure,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from '@chakra-ui/react'

export default function Home() 
{
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = useRef()
  const [confirmed, setConfirmation] = useState(false)

  return (
    <>
    
      <div className="flex flex-row justify-center items-center w-full h-full bg-pink-200 p-10 drop-shadow-xl">
        <div className="w-2/3 h-64 bg-gradient-to-r from-pink-300 to-pink-200 drop-shadow-xl rounded-full text-center transition-all duration-300">
          <h1 className="p-5 sm:p-10 tracking-wide text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white uppercase drop-shadow-lg" style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>Hi Beautiful Tamanna</h1>
        </div>
      </div>
      <style jsx>{`
        @media (min-width: 640px) {
          h1 {
            padding: 20px;
            font-size: 8xl;
          }
        }
      `}</style>

      <div className="flex flex-row items-center justify-evenly w-full h-96 bg-pink-50">
        <CommentedImage src='/tamanna1.jpg' text="wow so pretty"/>
        <CommentedImage src='/tamanna2.jpg' text="omg we&apos;re so cute"/>
        <CommentedImage src='/tamanna4.jpg' text="we should kiss?"/>
      </div>

      <div className="text-center w-full h-64 bg-pink-200 drop-shadow-xl">
        <h1 className="p-20 tracking-wide text-6xl font-bold text-pink-400 uppercase drop-shadow-xl">My Dear...</h1>
      </div>

      <div className="flex flex-col items-center text-center w-full h-96 bg-pink-50 p-10">
        <div className="flex flex-row items-center text-center w-full h-5/6 bg-pink-50">
          <h1 className='w-1/3 text-pink-300 font-bold text-4xl sm:text-6xl lg:text-8xl'>I'm Just Wanna Say</h1>
          <img src='https://t3.ftcdn.net/jpg/05/13/48/56/360_F_513485622_YqOMUOygHV4Lbx7SIs47xHI4W4tBoOVx.jpg' className="w-1/3 sm:w-1/2 lg:w-1/3 mx-auto border-4 border-pink-300 rounded-full animate-pulse" style={{maxWidth: '50%', height: 'auto'}}/>
          <h1 className='w-1/3 text-pink-300 font-bold text-4xl sm:text-6xl lg:text-8xl'>To My First Love</h1>
        </div>
        <h1 className="w-full h-1/4 text-pink-300 font-bold text-4xl sm:text-6xl lg:text-8xl uppercase"></h1>
      </div>
      <style jsx>{`
        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }

        @media (max-width: 640px) {
          img {
            border-width: 2px;
          }
        }

        @media (min-width: 1024px) {
          h1 {
            font-size: 8xl;
          }
        }

        @media (min-width: 1280px) {
          .flex-row {
            flex-direction: row;
          }
          .w-1/3 {
            width: 33.33%;
          }
          .w-1/2 {
            width: 50%;
          }
          .w-1/3 {
            width: 33.33%;
          }
          img {
            width: 180px;
            height: 200px;
          }
        }
      `}</style>

      <div className="text-center w-full h-64 bg-pink-200 drop-shadow-xl">
        <h1 className="p-20 tracking-wide text-6xl font-bold text-pink-400 uppercase drop-shadow-xl">You know Why ??</h1>
      </div>

      <CornyQuestion 
        question="Because I can't give you proper time My dear"
        nonactive="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Nuclear_symbol.svg/1024px-Nuclear_symbol.svg.png"
        active="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/76629/nuclear-explosion-clipart-xl.png"
        primary
        left
      />

      <div className="flex flex-row justify-around items-center text-center w-full h-96 bg-pink-200 p-5">
        <h1 className='w-2/3 text-pink-400 font-bold text-6xl'>forgive me</h1>
      </div>

      <div className="flex flex-row justify-around items-center text-center w-full h-96 bg-pink-50 p-5">
        <h1 className='w-2/3 text-pink-300 font-bold text-6xl'>Please ? </h1>
      </div>

      <CornyQuestion 
        question="Wanna know something ?"
        nonactive="data:image/jpeg;base64,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"
        active="https://i.imgflip.com/2oukdk.jpg"
        secondary
        right
      />

      <CornyQuestion 
        question="I love you so much"
        nonactive="https://images.srkh.in/wp-content/uploads/2020/08/I-Love-You-so-much-images.jpg"
        active="https://cdn.pixabay.com/photo/2018/08/03/04/36/couple-3581038_1280.jpg"
        primary
        left
      />

      <CornyQuestion 
        question="Would you be the banana to my Minion?"
        nonactive="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0a76b087-d923-4acf-85c5-118e6b81c7a0/d70lfsz-0a567aaf-a3ec-4cca-ac87-3820e4727e8f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzBhNzZiMDg3LWQ5MjMtNGFjZi04NWM1LTExOGU2YjgxYzdhMFwvZDcwbGZzei0wYTU2N2FhZi1hM2VjLTRjY2EtYWM4Ny0zODIwZTQ3MjdlOGYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.PZQsxdrOyzYABwsLATW4K94fX8RQBzUIzLrR-l8BDPU"
        active="https://i.redd.it/v0ep5v1vbl331.png"
        secondary
        right
      />

      <div className="flex flex-row justify-around items-center text-center w-full h-96 bg-pink-50 px-5 pt-5">
        <h1 className='w-2/3 text-pink-400 font-bold text-6xl'>If I'm the moon, would you be my shining star to light up the night of our love, Tamanna?</h1>
      </div>

      <div className="flex flex-row justify-around items-start text-center w-full h-36 bg-pink-50 pb-5">
        <RandomButton 
          text="No"
          minHeight={ 4600 }
          maxHeight={ 5000 }
        />

        <button 
          className="w-36 bg-pink-400 text-white text-2xl p-5 rounded-2xl"
          onClick={ onOpen }
        >
          YES
        </button>

        <AlertDialog
          isOpen={ isOpen }
          leastDestructiveRef={ cancelRef }
          onClose={ onClose } 
        >
          <AlertDialogOverlay>
            <AlertDialogContent>

              <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                OMG.
              </AlertDialogHeader>

              <AlertDialogBody>
                NO WAY SHE JUST SAID YES?
              </AlertDialogBody>

              <AlertDialogFooter>
                <Button 
                  colorScheme='pink' 
                  ref={ cancelRef } 
                  onClick={
                    () => 
                    {
                      onClose();
                      setConfirmation(true);
                    }
                  }
                >
                  Confirm
                </Button>
              </AlertDialogFooter>

            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </div>

      {
        confirmed ? 
        <div className="flex flex-col justify-around items-center text-center w-full h-[58em] bg-pink-200 p-5">
          <h1 className='w-2/3 text-pink-400 font-bold text-6xl'>A mail for my Love</h1>
          <div className="flex flex-col items-center gap-5 text-center w-3/4 h-5/6 bg-white p-5 rounded-3xl shadow-xl">
            <img className="h-24" src="https://cdn.pixabay.com/photo/2018/02/19/20/28/abstract-3166168__480.png" alt=""/>
            <p className="text-pink-400 font-bold text-2xl">My dearest Tamanna,</p>
            <p className="text-gray-500 text-lg">I hope this email finds you well. I just wanted to take a moment to express how much you mean to me. You light up my world and make every day brighter just by being in it.</p>
            <img className="h-24" src="https://cdn.pixabay.com/photo/2018/02/19/20/28/abstract-3166168__480.png" alt=""/>
            <p className="text-gray-500 text-lg">I know we've been through some tough times, but I want you to know that I am here for you always. I love you more than words can express, and I can't wait to see what the future holds for us.</p>
            <p className="text-pink-400 font-bold text-2xl">Forever yours,</p>
            <p className="text-gray-500 text-lg">YOUR LOVE YASIN</p>
          </div>
        </div>
        : 
        <></>
      }
    
    </>
  )
}
