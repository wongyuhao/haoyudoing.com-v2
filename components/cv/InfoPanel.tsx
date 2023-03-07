import React from "react";
import cvAPIResponse from "../interfaces/cvAPI";

export function InfoPanel({data}:{data: cvAPIResponse | undefined}){
    return (
        <div className='flex flex-col w-1/2 p-4 h-[calc(100vh-64px)] overflow-y-auto'>

            <div id={"cv-about"}>
                <p className={'cv-subheading'} >Problem Statement</p>
                <div>
                    Splitting bills shouldn't be so hard. Whether you're out grocery shopping, eating, or at any recreational events with a large party, itemizing a receipt is a chore.
                    MOMO aims to make this process as seamless as possible.
                    Simply by taking a photo of your receipt, MOMO will automatically parse each item and allow you to simply select who pays what,
                    then request the funds.
                    Finally, you have an easy interface to reflect on past group transactions which are still pending. Through this, we aim to bring additional convenience to the community.
                </div>
                <a target={'_blank'} rel="noreferrer" className={'styled'} href={'https://devpost.com/software/momo-sjxg21'}> <small>From MOMO v1</small></a>
            </div>
            <hr className={'my-4'}/>

            <div>
                <div className={'cv-subheading'}>Previous Work</div>
                <p>Concept from <a href={'https://devpost.com/software/momo-sjxg21'} className={'styled'} target={'_blank'} rel="noreferrer">MOMO v1</a></p>
                <small>(DubHacks 2022, YH Wong, R Liao, RJ Mao, M Lee)</small>
            </div>
            <hr className={'my-4'}/>

            <div id={"cv-video"}>
                <p className={'cv-subheading'} >Video</p>
                <div className={'py-3'}>
                    <YoutubeEmbed/>
                </div>
            </div>
            <hr className={'my-4'}/>

            <div id={'cv-pipeline'}>
                <p className={'font-black text-2xl'} >How it works</p>
                <p>The image processing pipeline uses the <b>OpenCV, Tesseract</b> and <b>PIL</b> libraries to run OCR on your uploaded image.</p>
                <div>
                    <LineTitle num={1} text={'Ingest the image'}/>
                    <p>The original image is uploaded to the backend, a Flask server Dockerized and hosted on AWS Lightsail. We use a 1x Small Instance with 1GB of RAM and a shared vCPU, so performance is not optimal.</p>
                    <LineTitle num={2} text={'Detect Regions of Interest'}/>
                    <div className={'flex flex-col gap-1 ml-5'}>
                        <li>
                            <b>Preprocessing :</b> Downscale and grayscale the image, apply Gaussian Blur to reduce noise.
                        </li>
                        <li>
                            <b>Detecting Regions:</b> Apply <a href={"https://homepages.inf.ed.ac.uk/rbf/HIPR2/dilate.htm"} className={'styled'} target={'_blank'} rel="noreferrer">dilation</a>
                            {' '}to highlight white regions on the image. We can assume that the receipt is the largest white region in the image
                        </li>
                    </div>

                    <p className={'cv-technique'}>Image Convolutions / Blurring · Morphological Dilation</p>


                    <LineTitle num={3} text={'Highlight Region in Image'}/>
                    <div className={'flex flex-col gap-1 ml-5'}>
                        <li>
                            <b>Edge Detection:</b> Run OpenCV's Canny Edge detection. Edges can get broken up due to contrast, so apply erosion and dilation to roughly combine them.
                        </li>
                        <li>
                            <b>Contour Detection:</b>
                            Use OpenCV to detect contours from the edges.
                            Use <a href={'https://pyimagesearch.com/2021/10/06/opencv-contour-approximation/'} className={'styled'} target={'_blank'} rel="noreferrer"> contour approximation </a> to find the bounding box of the receipt.
                            This is our region of interest in the image!
                        </li>
                    </div>
                    <p className={'cv-technique'}>Morphological Dilation / Erosion · Canny Edge Detection · Contour Approximation</p>


                    <LineTitle num={4} text={'Perspective Correction to Fit Region'} />
                    <div>Given the contours describing our region, the original image and the resizing ratio, map the 4 corners of our region to the original image. Apply perspective warp to this region to flatten it.</div>
                    <p className={'cv-technique'}>Perspective Transformations / Warping</p>

                    <LineTitle num={5} text={'Image Binarization'}/>
                    <p>
                        Apply preprocessing to create a b/w image for better text detection.
                        We use <a href={'https://pyimagesearch.com/2021/05/12/adaptive-thresholding-with-opencv-cv2-adaptivethreshold/'} target={'_blank'} rel="noreferrer" className={'styled'}>adaptive thresholding</a> to
                        account for differences in brightness / contrast across the region</p>

                    <p className={'cv-technique'}>Binarization · Adaptive Thresholding</p>

                    <LineTitle num={6} text={'Run OCR Model To Extract Information'}/>
                    <p>Use PyTesseract to detect text on our image, and parse relevant information with RegEx.</p>
                    <p>Return this data as the API response.</p>
                </div>
            </div>
            <hr className={'my-4'}/>

            <div id={'cv-discussion'}>
                <p className={'cv-subheading'} >Discussion</p>

                <p className={'font-bold text-xl  mb-2'}>What problems did you encounter?</p>
                <div className={'flex flex-col gap-2 ml-5'}>
                    <li>
                        <b>API Performance:</b> The pipeline is hosted on a 1xSmall AWS Lightsail container instance, which might not have sufficient computing power to complete all steps quickly, or handle concurrent users at scale.
                        Uploading large image files to the API is also a bottleneck.
                        The baseline image that we used for testing takes approx. 25 seconds to complete, but the API reports only taking 0.42s to run the actual pipeline on the image.
                    </li>
                    <li>
                        <b>Character Recognition Accuracy:</b> The baseline Tesseract model used is not optimized for receipts, resulting in somewhat-accurate text-box detection, but sometimes-inaccurate character recognition, leading to jumbled item names.
                    </li>
                    <li>
                        <b>Region Detection Accuracy:</b> If the contrast difference between the receipt and the background is not sufficiently high, the pipeline may fail to detect the contours. This is a common issue with most OCR, but this hand implementation is especially vulnerable to it.
                    </li>
                    <li>
                        <b>RegEx Matching Accuracy: </b> The current RegEx used to parse detected text is set to recognize dollar values in the $xx.xx format. Anything beyond that is not supported at this time.
                    </li>
                </div>


                <p className={'font-bold text-xl mt-5  mb-2'}>Are there next steps you would take if you kept working on the project?</p>
                <div className={'flex flex-col gap-2 ml-5'}>
                    <li>Improve system design of the application for better scaling and performance</li>
                    <li>Implement dynamic image downscaling to better handle large resolution files without loss of accuracy</li>
                    <li>Train the Tesseract model on the <a href={'https://github.com/clovaai/cord'} className={'styled'} target={'_blank'} rel="noreferrer">CORD dataset</a> for better OCR accuracy</li>

                </div>


                <p className={'font-bold text-xl mt-5  mb-2'}>How does your approach differ from others? Was that beneficial?</p>
                <div>
                    <p>
                        The initial concept was based on my <a href={'https://devpost.com/software/momo-sjxg21'} className={'styled'} target={'_blank'} rel="noreferrer">DubHacks 2022 submission</a>, hence the v2.
                        We replaced the original 3rd party OCR API with our own, allowing us to better tweak preprocessing steps to suit receipts better.
                        We are now also able to see intermediate steps as produced by the pipeline. While detection accuracy has not quite caught up, our design allows for modularity of the OCR modules.
                        We could feasibly drop-in a PyTorch or Google Vision model without much modification.
                    </p>
                </div>

            </div>


        </div>
    )
}

const CircleNum = ({num}:{num: number}) => {
    return <div className={'rounded-full bg-white text-gray-800 p-1 w-8 h-8 text-center font-black'}>
        <p>{num}</p>
    </div>
}

const LineTitle = ({num, text}:{num: number, text: string}) => {
    return (
        <div className={'py-2'}>
            <div className={'flex flex-row items-center my-1'}>
                <CircleNum num={num}/>
                <div className={'px-1'}/>
                <p className={'font-bold text-lg'}>{text}</p>
            </div>
        </div>
    )
}

const YoutubeEmbed = () => {
    return (
        <div style={{overflow: "hidden",resize: "none",maxWidth:"100%"}}>
            <div id={"embed-google-map"} style={{height:"100%", width:"100%", maxWidth:"100%"}}>
                <iframe
                    allowFullScreen={true}
                    src="https://www.youtube.com/embed/arUwVMtXm_U?ecver=1&amp;iv_load_policy=1&amp;rel=0&amp;showinfo=0&amp;yt:stretch=16:9&amp;autohide=1&amp;color=red&amp;width=560&amp;width=560"
                    width="560"
                    height="315"
                    frameBorder="0"/>
            </div>
        </div>
    )
}