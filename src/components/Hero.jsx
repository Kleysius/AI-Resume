import { logo } from '../assets';

const Hero = () => {
    return (
        <header className='w-full flex justify-center items-center flex-col'>
            <nav className='flex justify-between items-center w-full mb-10 pt-3'>
                <img src={logo} alt='sumz_logo' className='w-28 object-contain' />

                <button
                    type='button'
                    onClick={() => window.open('https://github.com/Kleysius')}
                    className='black_btn'
                >
                    Github
                </button>
            </nav>

            <h1 className='head_text'>Résumer des articles avec <br className='max-md:hidden' />
                <span className='orange_gradient'>GPT-4 d&#39;OpenAI</span></h1>
            <h2 className='desc'>
                Simplifiez votre lecture avec Summize, un résumeur d&#39;articles open-source qui transforme les articles longs en résumés clairs et concis.
            </h2>
        </header>
    )
}

export default Hero