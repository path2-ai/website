import { useEffect, useState, useRef } from 'react'
import { IconAlignJustified, IconArrowRight, IconLoader2, IconMail, IconMicrophone } from '@tabler/icons'




function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const mimeType = "audio/webm";


export function Developer() {

    const [useCaseInput, setUseCaseInput] = useState('Wow, this looks absolutely amazing!')
    function apiCall(useCaseInput) {
        return `curl -X POST \\
  https://app.kern.ai/workflow-api/workflows/3b521496-59ff-4281-b030-..../post-to-store/4b521496-59ff-4281-b030-..../then-listen-to-store/5b521496-59ff-4281-b030-.... \\
  -H 'Content-Type: application/json' \\
  -H 'Authorization: Bearer INSERT_KERN_API_KEY_HERE' \\
  -d '{"input":"${useCaseInput}"'

`
    }

    const [useCaseOutput, setUseCaseOutput] = useState(null)
    const [apiResponse, setApiResponse] = useState(null)

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (loading) {
            setTimeout(() => {
                setUseCaseOutput(`wow, that's a lot of text!`)
                setApiResponse(`wow, that's a lot of text! really really a lot of text! really really really a lot of text! really really really really a lot of text! really really really really really a lot of text! really really really really really really a lot of text! really really really really really really really a lot of text! really really really really really really really really a lot of text! really really really really really really really really really a lot of text'`)
                setLoading(false)
            }, 3000)
        }
    }, [loading])


    const [permission, setPermission] = useState(false);
    const mediaRecorder = useRef(null);
    const [isRecording, setIsRecording] = useState(false);
    const [stream, setStream] = useState(null);
    const [audioChunks, setAudioChunks] = useState([]);
    const [audio, setAudio] = useState(null);

    const getMicrophonePermission = async () => {
        if ("MediaRecorder" in window) {
            try {
                const streamData = await navigator.mediaDevices.getUserMedia({
                    audio: true,
                    video: false,
                });
                // setPermission(true);
                // setStream(streamData);
            } catch (err) {
                alert(err.message);
            }
        } else {
            alert("The MediaRecorder API is not supported in your browser.");
        }
    };

    const startRecording = async () => {
        setIsRecording(true);
        //create new Media recorder instance using the stream
        const media = new MediaRecorder(stream, { type: mimeType });
        //set the MediaRecorder instance to the mediaRecorder ref
        mediaRecorder.current = media;
        //invokes the start method to start the recording process
        mediaRecorder.current.start();
        let localAudioChunks = [];
        mediaRecorder.current.ondataavailable = (event) => {
            if (typeof event.data === "undefined") return;
            if (event.data.size === 0) return;
            localAudioChunks.push(event.data);
        };
        setAudioChunks(localAudioChunks);
    };

    const stopRecording = () => {
        setIsRecording(false);
        //stops the recording instance
        mediaRecorder.current.stop();
        mediaRecorder.current.onstop = () => {
            //creates a blob file from the audiochunks data
            const audioBlob = new Blob(audioChunks, { type: mimeType });
            //creates a playable URL from the blob file.
            const audioUrl = URL.createObjectURL(audioBlob);
            setAudio(audioUrl);
            setAudioChunks([]);
            setStream(null);
        };
    };

    return (

        <div className='mt-6 relative'>
            <div
                className='absolute w-full h-full bg-gradient-to-b from-[#0d0d0d] to-[#0f0f0f] border border-neutral-900 rounded-2xl opacity-90'
            />
            <div className='p-6 relative flex flex-col space-y-6'>
                <div className='grid grid-cols-2 gap-6'>
                    <div className='p-[1px] rounded-md bg-gradient-to-b from-gray-800 to-neutral-900'>
                        <div className='px-4 py-1 text-gray-500 text-sm rounded-t-md bg-neutral-900 border-b border-gray-800'>
                            Input (your voice recording)
                        </div>
                        <div
                            className="flex flex-col space-y-4 h-56 text-gray-100 block w-full bg-gradient-to-b from-[#0f0f0f] to-[#141414] p-4 rounded-b-md shadow-sm focus:outline-none sm:text-sm items-center justify-center"
                        >
                            <input type="file" accept="audio/*" capture />
                        </div>
                    </div>
                    <div className='p-[1px] rounded-md bg-gradient-to-b from-gray-800 to-neutral-900 overflow-hidden'>
                        <div className='px-4 py-1 flex flex-row justify-between rounded-t-md bg-neutral-900 border-b border-gray-800 font-mono'>
                            <div className='text-gray-500 text-sm'>
                                cURL
                            </div>
                            <a
                                className='group text-gray-500 hover:text-gray-300 text-sm'
                                href='https://docs.kern.ai'
                                target='_blank'
                                rel='noreferrer noopener'
                            >
                                Docs
                                <IconArrowRight className='inline-block w-4 h-4 ml-1 text-gray-500 group-hover:text-gray-300' />
                            </a>
                        </div>
                        <pre
                            className="h-56 block w-full bg-gradient-to-b from-[#0f0f0f] to-[#141414] p-4 rounded-b-md shadow-sm focus:outline-slate-800 font-mono text-xs text-green-500 overflow-auto"
                        >
                            {apiCall(useCaseInput.replace(/"/g, '\\"').replace(/\n/g, '\\n'))}
                        </pre>
                    </div>
                </div>

                <div className='p-[1px] rounded-lg bg-gradient-to-r from-neutral-900 via-green-700 to-neutral-900 hover:from-neutral-800 hover:via-green-600 hover:to-neutral-800'>
                    <button
                        className="h-16 w-full bg-[#141414] rounded-lg shadow-sm text-gray-200 flex flex-col items-center justify-center text-sm hover:bg-[#171717] active:bg-[#0f0f0f] hover:text-gray-300 transition-colors duration-200"
                        onClick={() => setLoading(true)}
                    >
                        <div className='flex flex-row items-center font-semibold'>
                            Calculate output
                            <IconArrowRight className='h-4 w-4 ml-2' />
                        </div>
                        <p className='text-gray-500 text-sm ml-2'>
                            Transcribes your voice recording to text, and generates an article draft.
                        </p>
                    </button>
                </div>
            </div>
        </div>
    )
}


