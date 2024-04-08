import Typewriter from "typewriter-effect";

export default function Text() {
    return (
        <div class="text-3xl sm:text-xl sm:p-5 font-bold flex flex-col items-center p-10">
            <p className="px-3">Sincere Apology to </p>
            <Typewriter
                options={{
                    strings: [
                        "Ọ̀rẹ́ mi àtàtà", 
                        "Ọ̀rẹ́ mi",
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 100,
                    delay: 500,
                }}
            />
        </div>
    );
};