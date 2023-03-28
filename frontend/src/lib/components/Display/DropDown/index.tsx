import * as React from 'react';
import Menu from '@mui/material/Menu';

import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';



export const DropDown = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const navigate = useNavigate();
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
        navigate('/projects');
    };

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                onMouseOver={handleClick}
                className="nav-links"
                style={{ border: 'none', background: 'none' }}
                variant="outlined">
                Projects
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
                className="dropdown">
                <div className="dropdown-container">
                    <Link onClick={handleClose} to="/collections">
                        Profile
                    </Link>
                    <Link onClick={handleClose} to="/">
                        My account
                    </Link>
                    <Link onClick={handleClose} to="/collections">
                        Logout
                    </Link>
                </div>
            </Menu>
        </div>
    );
};


export default DropDown;