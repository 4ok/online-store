import cn from 'classnames'

import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { Menu } from 'antd'

import { pages } from '~/data'

import './MainMenu.css'

const { Item } = Menu

MainMenu.propTypes = {
	selectedKey: PropTypes.string.isRequired,
	className: PropTypes.string,
}

MainMenu.defaultProps = { className: null }

export default function MainMenu({ selectedKey, className }) {
	return (
		<Menu
			className={ cn('MainMenu', className) }
			theme="dark"
			mode="horizontal"
			selectable={ false }
			selectedKeys={ [ selectedKey ] }
		>
			{ Object
				.keys(pages)
				.reduce((result, id) => {
					const { path, name, menu } = pages[id]

					if (menu) {
						const content = (path === selectedKey)
							? name
							: <Link to={ `${ path }` }>{ name }</Link>

						result.push(
							<Item
								key={ path }
								className="MainMenu__item"
							>
								{ content }
							</Item>
						)
					}

					return result
				}, [])
			}
		</Menu>
	)
}
