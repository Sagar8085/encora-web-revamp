import React from "react";
import { Smartphone, Award, Radio } from "lucide-react";
import { BinIcon, TagsIcon, VerifyIcon, ConnectIcon } from "@/components/icon";

export const threeSteps = [
    {
        img: "/images/Borrow_image.jpeg",
        title: "Borrow",
        sub: "Scan a QR (or staff assign) to link the container to the student.",
    },
    {
        img: "/images/three step photo.png",
        title: "Auto-open return",
        sub: "UHF RFID detects the tag and opens the correct slot.",
    },
    {
        img: "/images/three step reuse step 3.png",
        title: "Verified check-in",
        sub: "Door auto-locks; bin records photo + weight; optional reason.",
    },
];

export const modes = [
    {
        icon: <Smartphone className="w-5 h-5" />,
        title: "App-less QR",
        sub: "Default. No download. SMS/email reminders.",
    },
    {
        icon: <Award className="w-5 h-5" />,
        title: "Encora App (optional)",
        sub: "Rewards, history, push reminders.",
    },
    {
        icon: <Radio className="w-5 h-5" />,
        title: "Staff/RFID (BOH)",
        sub: "Low-range RFID for fast assignment; no stray scans.",
    },
];

export const howSteps = [
    {
        icon: <TagsIcon />,
        title: "Assign (Tag)",
        body: "QR or staff/RFID links container ↔ student ID/phone.",
    },
    {
        icon: <TagsIcon />,
        title: "Use (Archive)",
        body: "Students dine as usual; container stays tagged to them.",
    },
    {
        icon: <BinIcon />,
        title: "Return (Unlock)",
        body: "Approach bin → UHF RFID detects tag → door auto-opens correct slot.",
    },
    {
        icon: <VerifyIcon />,
        title: "Capture (Camera)",
        body: "Door auto-locks; bin snaps photos and measures weight; optional reason code.",
    },
    {
        icon: <VerifyIcon />,
        title: "Resolve (RetAI)",
        body: "Rules choose instant refund or queue for review based on evidence.",
    },
    {
        icon: <ConnectIcon />,
        title: "Sync (Webhook)",
        body: "Webhooks update campus card/POS/LMS; late reminders fire automatically.",
    },
];
