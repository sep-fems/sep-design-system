var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Menu as MenuIcon } from "@mui/icons-material";
import { MenuItem, Tooltip, Button, Avatar, Container, Menu, Typography, IconButton, Toolbar, Box, AppBar, } from "@mui/material";
var Header = function (_a) {
    var logo = _a.logo, pages = _a.pages, settings = _a.settings;
    var _b = useState(null), anchorElNav = _b[0], setAnchorElNav = _b[1];
    var _c = useState(null), anchorElUser = _c[0], setAnchorElUser = _c[1];
    var handleOpenNavMenu = function (event) {
        setAnchorElNav(event.currentTarget);
    };
    var handleOpenUserMenu = function (event) {
        setAnchorElUser(event.currentTarget);
    };
    var handleCloseNavMenu = function () {
        setAnchorElNav(null);
    };
    var handleCloseUserMenu = function () {
        setAnchorElUser(null);
    };
    var onClickMenu = function (menu) {
        handleCloseNavMenu();
        if (typeof menu.onClick === "function") {
            menu.onClick();
        }
    };
    var onClickUserMenu = function (menu) {
        handleCloseUserMenu();
        if (typeof menu.onClick === "function") {
            menu.onClick();
        }
    };
    return (_jsx(AppBar, __assign({ position: "static", color: "primary" }, { children: _jsx(Container, __assign({ maxWidth: "xl" }, { children: _jsxs(Toolbar, __assign({ disableGutters: true }, { children: [_jsx(Typography, __assign({ variant: "h6", noWrap: true, component: "div", sx: { mr: 2, display: { xs: "none", md: "flex" } } }, { children: logo })), _jsxs(Box, __assign({ sx: { flexGrow: 1, display: { xs: "flex", md: "none" } } }, { children: [_jsx(IconButton, __assign({ size: "large", "aria-label": "account of current user", "aria-controls": "menu-appbar", "aria-haspopup": "true", onClick: handleOpenNavMenu, color: "inherit" }, { children: _jsx(MenuIcon, {}) })), _jsx(Menu, __assign({ id: "menu-appbar", anchorEl: anchorElNav, anchorOrigin: {
                                    vertical: "bottom",
                                    horizontal: "left",
                                }, keepMounted: true, transformOrigin: {
                                    vertical: "top",
                                    horizontal: "left",
                                }, open: Boolean(anchorElNav), onClose: handleCloseNavMenu, sx: {
                                    display: { xs: "block", md: "none" },
                                } }, { children: pages.map(function (page) { return (_jsx(MenuItem, __assign({ onClick: function () { return onClickMenu(page); } }, { children: _jsx(Typography, __assign({ textAlign: "center" }, { children: page.name })) }), page.key)); }) }))] })), _jsx(Typography, __assign({ variant: "h6", noWrap: true, component: "div", sx: { flexGrow: 1, display: { xs: "flex", md: "none" } } }, { children: logo })), _jsx(Box, __assign({ sx: { flexGrow: 1, display: { xs: "none", md: "flex" } } }, { children: pages.map(function (page) { return (_jsx(Button, __assign({ onClick: function () { return onClickMenu(page); }, sx: { my: 2, color: "white", display: "block" } }, { children: page.name }), page.key)); }) })), _jsxs(Box, __assign({ sx: { flexGrow: 0 } }, { children: [_jsx(Tooltip, __assign({ title: "Open settings" }, { children: _jsx(IconButton, __assign({ onClick: handleOpenUserMenu, sx: { p: 0 } }, { children: _jsx(Avatar, { alt: "SEP" }) })) })), _jsx(Menu, __assign({ sx: { mt: "45px" }, id: "menu-appbar", anchorEl: anchorElUser, anchorOrigin: {
                                    vertical: "top",
                                    horizontal: "right",
                                }, keepMounted: true, transformOrigin: {
                                    vertical: "top",
                                    horizontal: "right",
                                }, open: Boolean(anchorElUser), onClose: handleCloseUserMenu }, { children: settings === null || settings === void 0 ? void 0 : settings.map(function (setting) { return (_jsx(MenuItem, __assign({ onClick: function () { return onClickUserMenu(setting); } }, { children: _jsx(Typography, __assign({ textAlign: "center" }, { children: setting.name })) }), setting.key)); }) }))] }))] })) })) })));
};
var defaultProps = {
    logo: _jsx("span", { children: "SEP" }),
    pages: [{ key: "Dashboard", name: "Dashboard" }],
    settings: [{ key: "Logout", name: "Logout" }],
};
Header.defaultProps = defaultProps;
export default Header;
