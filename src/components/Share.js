import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons"
import {
	FacebookShareButton,
	GooglePlusShareButton,
	LinkedinShareButton,
	TwitterShareButton,
	WhatsappShareButton,
	RedditShareButton,
} from 'react-share';

import './Share.scss';

const Share = ({ socialConfig, tags }) => (
	<div className="post-social">
		<FacebookShareButton url={socialConfig.config.url} className="button is-outlined is-rounded facebook">
			<span className="icon">
				<FontAwesomeIcon icon={faFacebook} size="2x"/>
			</span>
			<span className="text sr-only">Facebook</span>
		</FacebookShareButton>
        <TwitterShareButton url={socialConfig.config.url} className="button is-outlined is-rounded twitter" title={socialConfig.config.title} hashtags={tags} >
			<span className="icon">
				<FontAwesomeIcon icon={faTwitter} size="2x"/>
			</span>
			<span className="text sr-only">Twitter</span>
		</TwitterShareButton>
{/* 		<TwitterShareButton url={socialConfig.config.url} className="button is-outlined is-rounded twitter">
			<span className="icon">
				<FontAwesomeIcon icon={['fab', 'twitter']} />
			</span>
			<span className="text">Twitter</span>
		</TwitterShareButton>
		<GooglePlusShareButton url={socialConfig.config.url} className="button is-outlined is-rounded googleplus" >
			<span className="icon">
				<FontAwesomeIcon icon={['fab', 'google-plus-g']} />
			</span>
			<span className="text">Google+</span>
		</GooglePlusShareButton>
		<LinkedinShareButton url={socialConfig.config.url} className="button is-outlined is-rounded linkedin" >
			<span className="icon">
				<FontAwesomeIcon icon={['fab', 'linkedin-in']} />
			</span>
			<span className="text">LinkedIn</span>
		</LinkedinShareButton>
		<RedditShareButton url={socialConfig.config.url} className="button is-outlined is-rounded reddit" >
			<span className="icon">
				<FontAwesomeIcon icon={['fab', 'reddit-alien']} />
			</span>
			<span className="text">Reddit</span>
		</RedditShareButton>
		<WhatsappShareButton url={socialConfig.config.url} className="button is-outlined is-rounded whatsapp" >
			<span className="icon">
				<FontAwesomeIcon icon={['fab', 'whatsapp']} />
			</span>
			<span className="text">WhatsApp</span>
		</WhatsappShareButton> */}
	</div>
);

/* Share.propTypes = {
	socialConfig: PropTypes.shape({
		config: PropTypes.shape({
			url: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
		}),
	}).isRequired,
	tags: PropTypes.arrayOf(PropTypes.string),
}; */
Share.defaultProps = {
	tags: ["menschingermany", "bedingungslosesGrundeinkommen", "bge"],
};

export default Share;