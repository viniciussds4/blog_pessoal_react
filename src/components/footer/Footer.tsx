import { InstagramLogoIcon, LinkedinLogoIcon, YoutubeLogoIcon } from '@phosphor-icons/react'

function Footer() {

    let data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-indigo-900 text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>
                        Blog Pessoal Generation | Copyright: {data}
                    </p>
                    <p className='text-lg'>Acesse nossas redes sociais</p>
                    <div className='flex gap-2'>
                        <a href='https://www.linkedin.com/in/vinicius-souza0499/' target='_blank'>
                            <LinkedinLogoIcon size={48} weight='bold' />
                        </a>
                        <a href='https://www.instagram.com/qualqr_coisa_/?igsh=YzVlc2R3eDRsM2dw#' target='_blank'>
                            <InstagramLogoIcon size={48} weight='bold' />
                        </a>
                        <a href='https://www.youtube.com/@pixelproducoes1965' target='_blank'>
                            <YoutubeLogoIcon size={48} weight='bold' />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer