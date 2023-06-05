import './style.css'
import 'animate.css'

document.querySelector('#app').innerHTML = `
<div class="w-full h-20 bg-transparent">
    <nav class="w-full h-20 flex justify-between items-center px-11 shadow-lg">
        <div class="w-16 h-16 rounded-full m-2">
            <img src="./logo.jpg" alt="logo">
        </div>
        <div class="flex gap-3 mr-3">
            <a class="text-xl text-slate-100" href="#">Home</a>
            <a class="text-xl text-slate-100" href="#">Profile</a>
            <a class="text-xl text-slate-100" href="#">About</a>
        </div>
    </nav>
</div>
<section>
    <div class="">
        <div class="h-screen w-full bg-transparent flex justify-start items-center absolute">
            <h1 class="text-[5rem] max-sm:text-2xl text-amber-200 font-extrabold">Funny Website</h1>
        </div>
        <div class="writing-vertical text-right absolute left-[40%]">
            <p class="transform text-[8rem] max-sm:text-5xl hover:skew-x-12 text-slate-200 font-semibolds -rotate-90 animate-pulse inline-block">Wicked</p>
        </div>
        <div class="absolute left-[30%]">
            <h1 class="hover:opacity-40 text-[5rem] max-sm:text-2xl text-green-200">Interesting...</h1>
        </div>
        <button class="overflow-hidden h-auto w-auto text-4xl max-sm:text-xl font-semibold rounded-lg shadow-lg p-6 bg-amber-100 -bottom-20 text-center text-slate-900 relative z-10"></button>
        <div class="absolute left-[30%]">
            <p class="transform text-[6rem] max-sm:text-2xl text-lime-200 hover:translate-x-6 font-semibolds -rotate-180 inline-block">Twisted</p>
        </div>
        <div class="flex justify-end">
            <button class="overflow-hidden h-auto w-auto text-4xl max-sm:text-xl font-semibold rounded-lg shadow-lg p-6 bg-amber-100 -bottom-20 text-center text-slate-900 relative z-10">Tell me a joke</button>
        </div>
    </div>
</section>
<main>
    <section>
    <div class="card max-sm:w-full z-20 h-[55vh] w-[20%]">
        <div class="bg-cover rounded-md shadow-lg w-full h-full text-center flex justify-between flex-col p-5 bg-[url('/1.jpg')]">
            <p class="text-3xl text-amber-50 font-bold"></p>
            <p class="text-amber-50 font-bold"></p>
        </div>
    </div>
    <div class="card max-sm:w-full z-20 h-[55vh] w-[20%]">
        <div class="bg-cover rounded-md shadow-lg w-full h-full text-center flex justify-between flex-col p-5 bg-[url('/2.jpg')]">
            <p class="text-3xl text-amber-50 font-bold"></p>
            <p class="text-amber-50 font-bold"></p>
        </div>
    </div>
    <div class="card max-sm:w-full z-20 h-[55vh] w-[20%]">
        <div class="bg-cover rounded-md shadow-lg w-full h-full text-center flex justify-between flex-col p-5 bg-[url('/3.jpg')]">
            <p class="text-3xl text-amber-50 font-bold"></p>
            <p class="text-amber-50 font-bold"></p>
        </div>
    </div>
    <div class="card max-sm:w-full z-20 h-[55vh] w-[20%]">
        <div class="bg-cover rounded-md shadow-lg w-full h-full text-center flex justify-between flex-col p-5 bg-[url('/4.webp')]">
            <p class="text-3xl text-amber-50 font-bold"></p>
            <p class="text-amber-50 font-bold"></p>
        </div>
    </div>
    <div class="card max-sm:w-full z-20 h-[55vh] w-[20%]">
        <div class="bg-cover rounded-md shadow-lg w-full h-full text-center flex justify-between flex-col p-5 bg-[url('/5.webp')]">
            <p class="text-3xl text-amber-50 font-bold"></p>
            <p class="text-amber-50 font-bold"></p>
        </div>
    </div>
    <div class="card max-sm:w-full z-20 h-[55vh] w-[20%]">
        <div class="bg-cover rounded-md shadow-lg w-full h-full text-center flex justify-between flex-col p-5 bg-[url('/6.jpg')]">
            <p class="text-3xl text-amber-50 font-bold"></p>
            <p class="text-amber-50 font-bold"></p>
        </div>
    </div>
    <div class="card max-sm:w-full z-20 h-[55vh] w-[20%]">
        <div class="bg-cover rounded-md shadow-lg w-full h-full text-center flex justify-between flex-col p-5 bg-[url('/7.jpg')]">
            <p class="text-3xl text-amber-50 font-bold"></p>
            <p class="text-amber-50 font-bold"></p>
        </div>
    </div>
    <div class="card max-sm:w-full z-20 h-[55vh] w-[20%]">
        <div class="bg-cover rounded-md shadow-lg w-full h-full text-center flex justify-between flex-col p-5 bg-[url('/8.jpg')]">
            <p class="text-3xl text-amber-50 font-bold"></p>
            <p class="text-amber-50 font-bold"></p>
        </div>
    </div>
    </section>
</main>
`
