import Image from 'next/image';

import codeGrepperIcon from '../media/icons/result-sources-icons/codegrepper.jpeg';
import codepenIcon from '../media/icons/result-sources-icons/codepen.svg';
import codeProjectIcon from '../media/icons/result-sources-icons/codeproject.png';
import cssTricksIcon from '../media/icons/result-sources-icons/csstricks.png';
import devToIcon from '../media/icons/result-sources-icons/devto.svg';
import eggheadIoIcon from '../media/icons/result-sources-icons/eggheadio.svg';
import freeCodeCampIcon from '../media/icons/result-sources-icons/freecodecamp.jpg';
import githubIcon from '../media/icons/result-sources-icons/github.svg';
import hashnodeIcon from '../media/icons/result-sources-icons/hashnode.svg';
import mediumIcon from '../media/icons/result-sources-icons/medium.png';
import quoraIcon from '../media/icons/result-sources-icons/quora.png';
import redditIcon from '../media/icons/result-sources-icons/reddit.svg';
import sitepointIcon from '../media/icons/result-sources-icons/sitepoint.jpg';
import stackExchangeIcon from '../media/icons/result-sources-icons/stackexchange.svg';
import stackOverflowIcon from '../media/icons/result-sources-icons/stackoverflow.svg';
import youtubeIcon from '../media/icons/result-sources-icons/youtube.svg';

const CodeGrepper = () => <Image src={codeGrepperIcon} alt='CodeGrepper' />;
const Codepen = () => <Image src={codepenIcon} alt='Codepen' />;
const CodeProject = () => <Image src={codeProjectIcon} alt='CodeProject' />;
const CssTricks = () => <Image src={cssTricksIcon} alt='CssTricks' />;
const DevTo = () => <Image src={devToIcon} alt='DevTo' />;
const EggheadIo = () => <Image src={eggheadIoIcon} alt='EggheadIo' />;
const FreeCodeCamp = () => <Image src={freeCodeCampIcon} alt='FreeCodeCamp' />;
const Github = () => <Image src={githubIcon} alt='Github' />;
const Hashnode = () => <Image src={hashnodeIcon} alt='Hashnode' />;
const Medium = () => <Image src={mediumIcon} alt='Medium' />;
const Quora = () => <Image src={quoraIcon} alt='Quora' />;
const Reddit = () => <Image src={redditIcon} alt='Reddit' />;
const Sitepoint = () => <Image src={sitepointIcon} alt='Sitepoint' />;
const StackExchange = () => (
	<Image src={stackExchangeIcon} alt='StackExchange' />
);
const StackOverflow = () => (
	<Image src={stackOverflowIcon} alt='StackOverflow' />
);
const Youtube = () => <Image src={youtubeIcon} alt='Youtube' />;

const SourceImage = {
	CodeGrepper,
	Codepen,
	CodeProject,
	CssTricks,
	DevTo,
	EggheadIo,
	FreeCodeCamp,
	Github,
	Hashnode,
	Medium,
	Quora,
	Reddit,
	Sitepoint,
	StackExchange,
	StackOverflow,
	Youtube,
};

export default SourceImage;
