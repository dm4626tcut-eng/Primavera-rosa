import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Eye, Heart, MessageCircle, BarChart3, Sparkles, Settings, Upload, RefreshCw, X, Image as ImageIcon, Info, Trophy, Award, Crown, TrendingUp } from "lucide-react";
import gatoConBotas from "../assets/images/gato_con_botas_handcrafted_1779321779134.png";
import grinchAmigurumi from "../assets/images/grinch_amigurumi_1779322345095.png";
import grinchNewAmigurumi from "../assets/images/grinch_new_amigurumi_1779739740617.png";
import gatoLlavero from "../assets/images/gato_llavero_1779715868522.png";
import mafaldaAmigurumi from "../assets/images/mafalda_amigurumi_1779728375554.png";
import forkyAmigurumi from "../assets/images/forky_amigurumi_1779729543410.png";
import harryPotterAmigurumi from "../assets/images/harry_potter_amigurumi_1779729982826.png";
import chapulinAmigurumi from "../assets/images/chapulin_amigurumi_1779730256002.png";
import perryAmigurumi from "../assets/images/perry_amigurumi_1779730694931.png";
import mickeyMinnieAmigurumi from "../assets/images/mickey_minnie_amigurumi.jpg";
import pedroPicapiedraAmigurumi from "../assets/images/pedro_picapiedra_amigurumi.jpg";
import minnieAmigurumi from "../assets/images/minnie_mouse_amigurumi_png_1779737008775.png";
import llamaGafasAmigurumi from "../assets/images/llama_gafas_amigurumi_1779737504220.png";
import homeBackground from "../assets/images/primavera_rosa_home_bg_1779738260716.png";
import patricioEstrellaAmigurumi from "../assets/images/patricio_amigurumi_1779739189393.png";
import booAmigurumi from "../assets/images/boo_amigurumi_1779739447283.png";
import snoopyAmigurumi from "../assets/images/snoopy_aviator_amigurumi_1779740340089.png";
import grinchOrnamentAmigurumi from "../assets/images/grinch_ornament_1779740770083.png";

interface ImageWithFallbackProps {
  candidates: string[];
  alt: string;
  className?: string;
  referrerPolicy?: React.HTMLAttributeReferrerPolicy;
}

function ImageWithFallback({ candidates, alt, className, referrerPolicy }: ImageWithFallbackProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleError = () => {
    if (currentIndex < candidates.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  return (
    <img
      src={candidates[currentIndex]}
      alt={alt}
      onError={handleError}
      referrerPolicy={referrerPolicy}
      className={className}
    />
  );
}

// Helper to compress images on the client-side avoiding LocalStorage Quota Exceeded exceptions
const compressImage = (base64Str: string, maxWidth = 600, maxHeight = 600): Promise<string> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = base64Str;
    img.onload = () => {
      let width = img.width;
      let height = img.height;

      if (width > height) {
        if (width > maxWidth) {
          height = Math.round((height * maxWidth) / width);
          width = maxWidth;
        }
      } else {
        if (height > maxHeight) {
          width = Math.round((width * maxHeight) / height);
          height = maxHeight;
        }
      }

      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.drawImage(img, 0, 0, width, height);
        // Compact JPEG encoder with 0.65 quality for high compression and flawless UI scaling
        const compressedBase64 = canvas.toDataURL("image/jpeg", 0.65);
        resolve(compressedBase64);
      } else {
        resolve(base64Str);
      }
    };
    img.onerror = () => {
      resolve(base64Str);
    };
  });
};

export default function Gallery() {
  const phoneNumber = "3043596225";
  
  const gatoWhatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    "¡Hola! Estoy muy interesado en el amigurumi del Gato con botas, ¿me podrías dar más detalles?"
  )}`;

  const grinchWhatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    "¡Hola! Estoy muy interesado en el amigurumi del Grinch, ¿me podrías dar más detalles?"
  )}`;

  const gatoLlaveroWhatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    "¡Hola! Estoy muy interesado en el amigurumi del Gato con botas (Llavero / Accesorio), ¿me podrías dar más detalles?"
  )}`;

  const mafaldaWhatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    "¡Hola! Estoy muy interesado en el amigurumi de Mafalda, ¿me podrías dar más detalles?"
  )}`;

  const forkyWhatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    "¡Hola! Estoy muy interesado en el amigurumi de Forki, ¿me podrías dar más detalles?"
  )}`;

  const harryPotterWhatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    "¡Hola! Estoy muy interesado en el amigurumi de Harry Potter, ¿me podrías dar más detalles?"
  )}`;

  const chapulinWhatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    "¡Hola! Estoy muy interesado en el amigurumi del Chapulín Colorado, ¿me podrías dar más detalles?"
  )}`;

  const perryWhatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    "¡Hola! Estoy muy interesado en el amigurumi de Perry el ornitorrinco (tamaño llavero), ¿me podrías dar más detalles?"
  )}`;

  const mickeyMinnieWhatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    "¡Hola! Estoy muy interesado en el amigurumi de Mickey Mouse, ¿me podrías dar más detalles?"
  )}`;

  const minnieWhatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    "¡Hola! Estoy muy interesado en el amigurumi de Minnie Mouse, ¿me podrías dar más detalles?"
  )}`;

  const llamaGafasWhatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    "¡Hola! Estoy muy interesado en el amigurumi de Llama con gafas, ¿me podrías dar más detalles?"
  )}`;

  const pedroPicapiedraWhatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    "¡Hola! Estoy muy interesado en el amigurumi de Pedro Picapiedra, ¿me podrías dar más detalles?"
  )}`;

  const patricioEstrellaWhatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    "¡Hola! Estoy muy interesado en el amigurumi de Patricio Estrella, ¿me podrías dar más detalles?"
  )}`;

  const booWhatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    "¡Hola! Estoy muy interesado en el amigurumi de Boo, ¿me podrías dar más detalles?"
  )}`;

  const sullivanMikeWhatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    "¡Hola! Estoy muy interesado en el amigurumi de Sullivan y Mike Wazowski, ¿me podrías dar más detalles?"
  )}`;

  const snoopyWhatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    "¡Hola! Estoy muy interesado en el amigurumi de Snoopy, ¿me podrías dar más detalles?"
  )}`;

  const grinchOrnWhatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    "¡Hola! Estoy muy interesado en el amigurumi del Grinch Adorno, ¿me podrías dar más detalles?"
  )}`;

  // Customization overriding states for manual image catalog upload/modification
  const [userGatoImg, setUserGatoImg] = useState<string | null>(() => localStorage.getItem("user_img_gato"));
  const [userGrinchImg, setUserGrinchImg] = useState<string | null>(() => localStorage.getItem("user_img_grinch"));
  const [userGatoLlaveroImg, setUserGatoLlaveroImg] = useState<string | null>(() => localStorage.getItem("user_img_gato_llavero"));
  const [userMafaldaImg, setUserMafaldaImg] = useState<string | null>(() => localStorage.getItem("user_img_mafalda"));
  const [userForkyImg, setUserForkyImg] = useState<string | null>(() => localStorage.getItem("user_img_forky"));
  const [userHarryPotterImg, setUserHarryPotterImg] = useState<string | null>(() => localStorage.getItem("user_img_harry_potter"));
  const [userChapulinImg, setUserChapulinImg] = useState<string | null>(() => localStorage.getItem("user_img_chapulin"));
  const [userPerryImg, setUserPerryImg] = useState<string | null>(() => localStorage.getItem("user_img_perry"));
  const [userMickeyMinnieImg, setUserMickeyMinnieImg] = useState<string | null>(() => localStorage.getItem("user_img_mickey_minnie"));
  const [userMinnieImg, setUserMinnieImg] = useState<string | null>(() => localStorage.getItem("user_img_minnie"));
  const [userLlamaGafasImg, setUserLlamaGafasImg] = useState<string | null>(() => localStorage.getItem("user_img_llama_gafas"));
  const [userPedroPicapiedraImg, setUserPedroPicapiedraImg] = useState<string | null>(() => localStorage.getItem("user_img_pedro_picapiedra"));
  const [userPatricioEstrellaImg, setUserPatricioEstrellaImg] = useState<string | null>(() => localStorage.getItem("user_img_patricio_estrella"));
  const [userBooImg, setUserBooImg] = useState<string | null>(() => localStorage.getItem("user_img_boo"));
  const [userSullivanMikeImg, setUserSullivanMikeImg] = useState<string | null>(() => localStorage.getItem("user_img_sullivan_mike"));
  const [userSnoopyImg, setUserSnoopyImg] = useState<string | null>(() => localStorage.getItem("user_img_snoopy"));
  const [userGrinchOrnImg, setUserGrinchOrnImg] = useState<string | null>(() => localStorage.getItem("user_img_grinch_orn"));
  const [userHeroBg, setUserHeroBg] = useState<string | null>(() => localStorage.getItem("user_img_hero_bg"));
  const [heroBgUrlInput, setHeroBgUrlInput] = useState("");
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<{ type: "success" | "error" | "loading"; message: string } | null>(null);

  // Candidates lists starting with user exact uploads, fallback to high-quality generated assets
  const gatoCandidates = [
    ...(userGatoImg ? [userGatoImg] : []),
    "/assets/gato_con_botas.png",
    "/assets/gato_con_botas.jpg",
    "/assets/gato_con_botas.jpeg",
    "/gato_con_botas.png",
    "/gato_con_botas.jpg",
    "/gato.png",
    "/gato.jpg",
    gatoConBotas
  ];

  const grinchCandidates = [
    ...(userGrinchImg ? [userGrinchImg] : []),
    grinchNewAmigurumi,
    grinchAmigurumi,
    "/assets/grinch.png",
    "/assets/grinch.jpg",
    "/assets/grinch.jpeg",
    "/grinch.png",
    "/grinch.jpg"
  ];

  const gatoLlaveroCandidates = [
    ...(userGatoLlaveroImg ? [userGatoLlaveroImg] : []),
    gatoLlavero,
    gatoConBotas
  ];

  const mafaldaCandidates = [
    ...(userMafaldaImg ? [userMafaldaImg] : []),
    mafaldaAmigurumi
  ];

  const forkyCandidates = [
    ...(userForkyImg ? [userForkyImg] : []),
    forkyAmigurumi
  ];

  const harryPotterCandidates = [
    ...(userHarryPotterImg ? [userHarryPotterImg] : []),
    harryPotterAmigurumi
  ];

  const chapulinCandidates = [
    ...(userChapulinImg ? [userChapulinImg] : []),
    chapulinAmigurumi
  ];

  const perryCandidates = [
    ...(userPerryImg ? [userPerryImg] : []),
    perryAmigurumi
  ];

  const mickeyMinnieCandidates = [
    ...(userMickeyMinnieImg ? [userMickeyMinnieImg] : []),
    mickeyMinnieAmigurumi
  ];

  const minnieCandidates = [
    ...(userMinnieImg ? [userMinnieImg] : []),
    minnieAmigurumi
  ];

  const llamaGafasCandidates = [
    ...(userLlamaGafasImg ? [userLlamaGafasImg] : []),
    llamaGafasAmigurumi
  ];

  const pedroPicapiedraCandidates = [
    ...(userPedroPicapiedraImg ? [userPedroPicapiedraImg] : []),
    pedroPicapiedraAmigurumi
  ];

  const patricioEstrellaCandidates = [
    ...(userPatricioEstrellaImg ? [userPatricioEstrellaImg] : []),
    patricioEstrellaAmigurumi
  ];

  const booCandidates = [
    ...(userBooImg ? [userBooImg] : []),
    booAmigurumi
  ];

  const sullivanMikeCandidates = [
    ...(userSullivanMikeImg ? [userSullivanMikeImg] : []),
    "https://picsum.photos/seed/sullivanmike/800/600"
  ];

  const snoopyCandidates = [
    ...(userSnoopyImg ? [userSnoopyImg] : []),
    snoopyAmigurumi
  ];

  const grinchOrnCandidates = [
    ...(userGrinchOrnImg ? [userGrinchOrnImg] : []),
    grinchOrnamentAmigurumi
  ];

  // States for dynamic visualization metrics
  const [views, setViews] = useState(0);
  const [gatoLikes, setGatoLikes] = useState(0);
  const [grinchLikes, setGrinchLikes] = useState(0);
  const [gatoLlaveroLikes, setGatoLlaveroLikes] = useState(0);
  const [mafaldaLikes, setMafaldaLikes] = useState(0);
  const [forkyLikes, setForkyLikes] = useState(0);
  const [harryPotterLikes, setHarryPotterLikes] = useState(0);
  const [chapulinLikes, setChapulinLikes] = useState(0);
  const [perryLikes, setPerryLikes] = useState(0);
  const [mickeyMinnieLikes, setMickeyMinnieLikes] = useState(0);
  const [minnieLikes, setMinnieLikes] = useState(0);
  const [llamaGafasLikes, setLlamaGafasLikes] = useState(0);
  const [pedroPicapiedraLikes, setPedroPicapiedraLikes] = useState(0);
  const [patricioEstrellaLikes, setPatricioEstrellaLikes] = useState(0);
  const [booLikes, setBooLikes] = useState(0);
  const [sullivanMikeLikes, setSullivanMikeLikes] = useState(0);
  const [snoopyLikes, setSnoopyLikes] = useState(0);
  const [grinchOrnLikes, setGrinchOrnLikes] = useState(0);
  const [gatoClicks, setGatoClicks] = useState(1);
  const [grinchClicks, setGrinchClicks] = useState(1);
  const [gatoLlaveroClicks, setGatoLlaveroClicks] = useState(1);
  const [mafaldaClicks, setMafaldaClicks] = useState(1);
  const [forkyClicks, setForkyClicks] = useState(1);
  const [harryPotterClicks, setHarryPotterClicks] = useState(1);
  const [chapulinClicks, setChapulinClicks] = useState(1);
  const [perryClicks, setPerryClicks] = useState(1);
  const [mickeyMinnieClicks, setMickeyMinnieClicks] = useState(1);
  const [minnieClicks, setMinnieClicks] = useState(1);
  const [llamaGafasClicks, setLlamaGafasClicks] = useState(1);
  const [pedroPicapiedraClicks, setPedroPicapiedraClicks] = useState(1);
  const [patricioEstrellaClicks, setPatricioEstrellaClicks] = useState(1);
  const [booClicks, setBooClicks] = useState(1);
  const [sullivanMikeClicks, setSullivanMikeClicks] = useState(1);
  const [snoopyClicks, setSnoopyClicks] = useState(1);
  const [grinchOrnClicks, setGrinchOrnClicks] = useState(1);
  
  const [hasLikedGato, setHasLikedGato] = useState(false);
  const [hasLikedGrinch, setHasLikedGrinch] = useState(false);
  const [hasLikedGatoLlavero, setHasLikedGatoLlavero] = useState(false);
  const [hasLikedMafalda, setHasLikedMafalda] = useState(false);
  const [hasLikedForky, setHasLikedForky] = useState(false);
  const [hasLikedHarryPotter, setHasLikedHarryPotter] = useState(false);
  const [hasLikedChapulin, setHasLikedChapulin] = useState(false);
  const [hasLikedPerry, setHasLikedPerry] = useState(false);
  const [hasLikedMickeyMinnie, setHasLikedMickeyMinnie] = useState(false);
  const [hasLikedMinnie, setHasLikedMinnie] = useState(false);
  const [hasLikedLlamaGafas, setHasLikedLlamaGafas] = useState(false);
  const [hasLikedPedroPicapiedra, setHasLikedPedroPicapiedra] = useState(false);
  const [hasLikedPatricioEstrella, setHasLikedPatricioEstrella] = useState(false);
  const [hasLikedBoo, setHasLikedBoo] = useState(false);
  const [hasLikedSullivanMike, setHasLikedSullivanMike] = useState(false);
  const [hasLikedSnoopy, setHasLikedSnoopy] = useState(false);
  const [hasLikedGrinchOrn, setHasLikedGrinchOrn] = useState(false);

  useEffect(() => {
    // Gallery Views Tracking (Page Loads)
    const localViews = localStorage.getItem("gallery_total_views");
    const currentViews = localViews ? parseInt(localViews, 10) : 348;
    const newViews = currentViews + 1;
    localStorage.setItem("gallery_total_views", newViews.toString());
    setViews(newViews);

    // One-time reset to 0 as requested by owner
    if (localStorage.getItem("gallery_likes_reset_v3") !== "true") {
      const keys = [
        "gallery_gato_likes", "gallery_grinch_likes", "gallery_gato_llavero_likes",
        "gallery_mafalda_likes", "gallery_forky_likes", "gallery_harry_potter_likes",
        "gallery_chapulin_likes", "gallery_perry_likes", "gallery_mickey_minnie_likes",
        "gallery_minnie_likes", "gallery_llama_gafas_likes", "gallery_pedro_picapiedra_likes",
        "gallery_patricio_estrella_likes", "gallery_boo_likes", "gallery_sullivan_mike_likes",
        "gallery_snoopy_likes", "gallery_grinch_orn_likes"
      ];
      keys.forEach(k => localStorage.setItem(k, "0"));
      localStorage.setItem("gallery_likes_reset_v3", "true");
    }

    // Likes Loading
    const localGatoLikes = localStorage.getItem("gallery_gato_likes");
    setGatoLikes(localGatoLikes ? parseInt(localGatoLikes, 10) : 0);
    const localGrinchLikes = localStorage.getItem("gallery_grinch_likes");
    setGrinchLikes(localGrinchLikes ? parseInt(localGrinchLikes, 10) : 0);
    const localGatoLlaveroLikes = localStorage.getItem("gallery_gato_llavero_likes");
    setGatoLlaveroLikes(localGatoLlaveroLikes ? parseInt(localGatoLlaveroLikes, 10) : 0);
    const localMafaldaLikes = localStorage.getItem("gallery_mafalda_likes");
    setMafaldaLikes(localMafaldaLikes ? parseInt(localMafaldaLikes, 10) : 0);
    const localForkyLikes = localStorage.getItem("gallery_forky_likes");
    setForkyLikes(localForkyLikes ? parseInt(localForkyLikes, 10) : 0);
    const localHarryPotterLikes = localStorage.getItem("gallery_harry_potter_likes");
    setHarryPotterLikes(localHarryPotterLikes ? parseInt(localHarryPotterLikes, 10) : 0);
    const localChapulinLikes = localStorage.getItem("gallery_chapulin_likes");
    setChapulinLikes(localChapulinLikes ? parseInt(localChapulinLikes, 10) : 0);
    const localPerryLikes = localStorage.getItem("gallery_perry_likes");
    setPerryLikes(localPerryLikes ? parseInt(localPerryLikes, 10) : 0);
    const localMickeyMinnieLikes = localStorage.getItem("gallery_mickey_minnie_likes");
    setMickeyMinnieLikes(localMickeyMinnieLikes ? parseInt(localMickeyMinnieLikes, 10) : 0); 
    const localMinnieLikes = localStorage.getItem("gallery_minnie_likes");
    setMinnieLikes(localMinnieLikes ? parseInt(localMinnieLikes, 10) : 0); 
    const localLlamaGafasLikes = localStorage.getItem("gallery_llama_gafas_likes");
    setLlamaGafasLikes(localLlamaGafasLikes ? parseInt(localLlamaGafasLikes, 10) : 0);
    const localPedroPicapiedraLikes = localStorage.getItem("gallery_pedro_picapiedra_likes");
    setPedroPicapiedraLikes(localPedroPicapiedraLikes ? parseInt(localPedroPicapiedraLikes, 10) : 0);
    const localPatricioEstrellaLikes = localStorage.getItem("gallery_patricio_estrella_likes");
    setPatricioEstrellaLikes(localPatricioEstrellaLikes ? parseInt(localPatricioEstrellaLikes, 10) : 0);
    const localBooLikes = localStorage.getItem("gallery_boo_likes");
    setBooLikes(localBooLikes ? parseInt(localBooLikes, 10) : 0);
    const localSullivanMikeLikes = localStorage.getItem("gallery_sullivan_mike_likes");
    setSullivanMikeLikes(localSullivanMikeLikes ? parseInt(localSullivanMikeLikes, 10) : 0);
    const localSnoopyLikes = localStorage.getItem("gallery_snoopy_likes");
    setSnoopyLikes(localSnoopyLikes ? parseInt(localSnoopyLikes, 10) : 0);
    const localGrinchOrnLikes = localStorage.getItem("gallery_grinch_orn_likes");
    setGrinchOrnLikes(localGrinchOrnLikes ? parseInt(localGrinchOrnLikes, 10) : 0);

    // Clicks/Consultations Loading
    const localGatoClicks = localStorage.getItem("gallery_gato_clicks");
    setGatoClicks(localGatoClicks ? parseInt(localGatoClicks, 10) : 19);
    const localGrinchClicks = localStorage.getItem("gallery_grinch_clicks");
    setGrinchClicks(localGrinchClicks ? parseInt(localGrinchClicks, 10) : 16);
    const localGatoLlaveroClicks = localStorage.getItem("gallery_gato_llavero_clicks");
    setGatoLlaveroClicks(localGatoLlaveroClicks ? parseInt(localGatoLlaveroClicks, 10) : 12);
    const localMafaldaClicks = localStorage.getItem("gallery_mafalda_clicks");
    setMafaldaClicks(localMafaldaClicks ? parseInt(localMafaldaClicks, 10) : 14);
    const localForkyClicks = localStorage.getItem("gallery_forky_clicks");
    setForkyClicks(localForkyClicks ? parseInt(localForkyClicks, 10) : 9);
    const localHarryPotterClicks = localStorage.getItem("gallery_harry_potter_clicks");
    setHarryPotterClicks(localHarryPotterClicks ? parseInt(localHarryPotterClicks, 10) : 22);
    const localChapulinClicks = localStorage.getItem("gallery_chapulin_clicks");
    setChapulinClicks(localChapulinClicks ? parseInt(localChapulinClicks, 10) : 18);
    const localPerryClicks = localStorage.getItem("gallery_perry_clicks");
    setPerryClicks(localPerryClicks ? parseInt(localPerryClicks, 10) : 12);
    const localMickeyMinnieClicks = localStorage.getItem("gallery_mickey_minnie_clicks");
    setMickeyMinnieClicks(localMickeyMinnieClicks ? parseInt(localMickeyMinnieClicks, 10) : 25);
    const localMinnieClicks = localStorage.getItem("gallery_minnie_clicks");
    setMinnieClicks(localMinnieClicks ? parseInt(localMinnieClicks, 10) : 31);
    const localLlamaGafasClicks = localStorage.getItem("gallery_llama_gafas_clicks");
    setLlamaGafasClicks(localLlamaGafasClicks ? parseInt(localLlamaGafasClicks, 10) : 28);
    const localPedroPicapiedraClicks = localStorage.getItem("gallery_pedro_picapiedra_clicks");
    setPedroPicapiedraClicks(localPedroPicapiedraClicks ? parseInt(localPedroPicapiedraClicks, 10) : 24);
    const localPatricioEstrellaClicks = localStorage.getItem("gallery_patricio_estrella_clicks");
    setPatricioEstrellaClicks(localPatricioEstrellaClicks ? parseInt(localPatricioEstrellaClicks, 10) : 35);
    const localBooClicks = localStorage.getItem("gallery_boo_clicks");
    setBooClicks(localBooClicks ? parseInt(localBooClicks, 10) : 48);
    const localSullivanMikeClicks = localStorage.getItem("gallery_sullivan_mike_clicks");
    setSullivanMikeClicks(localSullivanMikeClicks ? parseInt(localSullivanMikeClicks, 10) : 54);
    const localSnoopyClicks = localStorage.getItem("gallery_snoopy_clicks");
    setSnoopyClicks(localSnoopyClicks ? parseInt(localSnoopyClicks, 10) : 62);
    const localGrinchOrnClicks = localStorage.getItem("gallery_grinch_orn_clicks");
    setGrinchOrnClicks(localGrinchOrnClicks ? parseInt(localGrinchOrnClicks, 10) : 48);

    // User interaction history
    setHasLikedGato(localStorage.getItem("has_liked_gato") === "true");
    setHasLikedGrinch(localStorage.getItem("has_liked_grinch") === "true");
    setHasLikedGatoLlavero(localStorage.getItem("has_liked_gato_llavero") === "true");
    setHasLikedMafalda(localStorage.getItem("has_liked_mafalda") === "true");
    setHasLikedForky(localStorage.getItem("has_liked_forky") === "true");
    setHasLikedHarryPotter(localStorage.getItem("has_liked_harry_potter") === "true");
    setHasLikedChapulin(localStorage.getItem("has_liked_chapulin") === "true");
    setHasLikedPerry(localStorage.getItem("has_liked_perry") === "true");
    setHasLikedMickeyMinnie(localStorage.getItem("has_liked_mickey_minnie") === "true");
    setHasLikedMinnie(localStorage.getItem("has_liked_minnie") === "true");
    setHasLikedLlamaGafas(localStorage.getItem("has_liked_llama_gafas") === "true");
    setHasLikedPedroPicapiedra(localStorage.getItem("has_liked_pedro_picapiedra") === "true");
    setHasLikedPatricioEstrella(localStorage.getItem("has_liked_patricio_estrella") === "true");
    setHasLikedBoo(localStorage.getItem("has_liked_boo") === "true");
    setHasLikedSullivanMike(localStorage.getItem("has_liked_sullivan_mike") === "true");
    setHasLikedSnoopy(localStorage.getItem("has_liked_snoopy") === "true");
    setHasLikedGrinchOrn(localStorage.getItem("has_liked_grinch_orn") === "true");
  }, []);

  const handleLikeGato = () => {
    if (hasLikedGato) {
      const newLikes = gatoLikes - 1;
      setGatoLikes(newLikes);
      localStorage.setItem("gallery_gato_likes", newLikes.toString());
      localStorage.setItem("has_liked_gato", "false");
      setHasLikedGato(false);
    } else {
      const newLikes = gatoLikes + 1;
      setGatoLikes(newLikes);
      localStorage.setItem("gallery_gato_likes", newLikes.toString());
      localStorage.setItem("has_liked_gato", "true");
      setHasLikedGato(true);
    }
  };

  const handleLikeGrinch = () => {
    if (hasLikedGrinch) {
      const newLikes = grinchLikes - 1;
      setGrinchLikes(newLikes);
      localStorage.setItem("gallery_grinch_likes", newLikes.toString());
      localStorage.setItem("has_liked_grinch", "false");
      setHasLikedGrinch(false);
    } else {
      const newLikes = grinchLikes + 1;
      setGrinchLikes(newLikes);
      localStorage.setItem("gallery_grinch_likes", newLikes.toString());
      localStorage.setItem("has_liked_grinch", "true");
      setHasLikedGrinch(true);
    }
  };

  const handleLikeGatoLlavero = () => {
    if (hasLikedGatoLlavero) {
      const newLikes = gatoLlaveroLikes - 1;
      setGatoLlaveroLikes(newLikes);
      localStorage.setItem("gallery_gato_llavero_likes", newLikes.toString());
      localStorage.setItem("has_liked_gato_llavero", "false");
      setHasLikedGatoLlavero(false);
    } else {
      const newLikes = gatoLlaveroLikes + 1;
      setGatoLlaveroLikes(newLikes);
      localStorage.setItem("gallery_gato_llavero_likes", newLikes.toString());
      localStorage.setItem("has_liked_gato_llavero", "true");
      setHasLikedGatoLlavero(true);
    }
  };

  const handleLikeMafalda = () => {
    if (hasLikedMafalda) {
      const newLikes = mafaldaLikes - 1;
      setMafaldaLikes(newLikes);
      localStorage.setItem("gallery_mafalda_likes", newLikes.toString());
      localStorage.setItem("has_liked_mafalda", "false");
      setHasLikedMafalda(false);
    } else {
      const newLikes = mafaldaLikes + 1;
      setMafaldaLikes(newLikes);
      localStorage.setItem("gallery_mafalda_likes", newLikes.toString());
      localStorage.setItem("has_liked_mafalda", "true");
      setHasLikedMafalda(true);
    }
  };

  const handleLikeForky = () => {
    if (hasLikedForky) {
      const newLikes = forkyLikes - 1;
      setForkyLikes(newLikes);
      localStorage.setItem("gallery_forky_likes", newLikes.toString());
      localStorage.setItem("has_liked_forky", "false");
      setHasLikedForky(false);
    } else {
      const newLikes = forkyLikes + 1;
      setForkyLikes(newLikes);
      localStorage.setItem("gallery_forky_likes", newLikes.toString());
      localStorage.setItem("has_liked_forky", "true");
      setHasLikedForky(true);
    }
  };

  const handleLikeHarryPotter = () => {
    if (hasLikedHarryPotter) {
      const newLikes = harryPotterLikes - 1;
      setHarryPotterLikes(newLikes);
      localStorage.setItem("gallery_harry_potter_likes", newLikes.toString());
      localStorage.setItem("has_liked_harry_potter", "false");
      setHasLikedHarryPotter(false);
    } else {
      const newLikes = harryPotterLikes + 1;
      setHarryPotterLikes(newLikes);
      localStorage.setItem("gallery_harry_potter_likes", newLikes.toString());
      localStorage.setItem("has_liked_harry_potter", "true");
      setHasLikedHarryPotter(true);
    }
  };

  const handleLikeChapulin = () => {
    if (hasLikedChapulin) {
      const newLikes = chapulinLikes - 1;
      setChapulinLikes(newLikes);
      localStorage.setItem("gallery_chapulin_likes", newLikes.toString());
      localStorage.setItem("has_liked_chapulin", "false");
      setHasLikedChapulin(false);
    } else {
      const newLikes = chapulinLikes + 1;
      setChapulinLikes(newLikes);
      localStorage.setItem("gallery_chapulin_likes", newLikes.toString());
      localStorage.setItem("has_liked_chapulin", "true");
      setHasLikedChapulin(true);
    }
  };

  const handleLikePerry = () => {
    if (hasLikedPerry) {
      const newLikes = perryLikes - 1;
      setPerryLikes(newLikes);
      localStorage.setItem("gallery_perry_likes", newLikes.toString());
      localStorage.setItem("has_liked_perry", "false");
      setHasLikedPerry(false);
    } else {
      const newLikes = perryLikes + 1;
      setPerryLikes(newLikes);
      localStorage.setItem("gallery_perry_likes", newLikes.toString());
      localStorage.setItem("has_liked_perry", "true");
      setHasLikedPerry(true);
    }
  };

  const handleLikeMickeyMinnie = () => {
    if (hasLikedMickeyMinnie) {
      const newLikes = mickeyMinnieLikes - 1;
      setMickeyMinnieLikes(newLikes);
      localStorage.setItem("gallery_mickey_minnie_likes", newLikes.toString());
      localStorage.setItem("has_liked_mickey_minnie", "false");
      setHasLikedMickeyMinnie(false);
    } else {
      const newLikes = mickeyMinnieLikes + 1;
      setMickeyMinnieLikes(newLikes);
      localStorage.setItem("gallery_mickey_minnie_likes", newLikes.toString());
      localStorage.setItem("has_liked_mickey_minnie", "true");
      setHasLikedMickeyMinnie(true);
    }
  };

  const handleLikeMinnie = () => {
    if (hasLikedMinnie) {
      const newLikes = minnieLikes - 1;
      setMinnieLikes(newLikes);
      localStorage.setItem("gallery_minnie_likes", newLikes.toString());
      localStorage.setItem("has_liked_minnie", "false");
      setHasLikedMinnie(false);
    } else {
      const newLikes = minnieLikes + 1;
      setMinnieLikes(newLikes);
      localStorage.setItem("gallery_minnie_likes", newLikes.toString());
      localStorage.setItem("has_liked_minnie", "true");
      setHasLikedMinnie(true);
    }
  };

  const handleLikeLlamaGafas = () => {
    if (hasLikedLlamaGafas) {
      const newLikes = llamaGafasLikes - 1;
      setLlamaGafasLikes(newLikes);
      localStorage.setItem("gallery_llama_gafas_likes", newLikes.toString());
      localStorage.setItem("has_liked_llama_gafas", "false");
      setHasLikedLlamaGafas(false);
    } else {
      const newLikes = llamaGafasLikes + 1;
      setLlamaGafasLikes(newLikes);
      localStorage.setItem("gallery_llama_gafas_likes", newLikes.toString());
      localStorage.setItem("has_liked_llama_gafas", "true");
      setHasLikedLlamaGafas(true);
    }
  };

  const handleLikePedroPicapiedra = () => {
    if (hasLikedPedroPicapiedra) {
      const newLikes = pedroPicapiedraLikes - 1;
      setPedroPicapiedraLikes(newLikes);
      localStorage.setItem("gallery_pedro_picapiedra_likes", newLikes.toString());
      localStorage.setItem("has_liked_pedro_picapiedra", "false");
      setHasLikedPedroPicapiedra(false);
    } else {
      const newLikes = pedroPicapiedraLikes + 1;
      setPedroPicapiedraLikes(newLikes);
      localStorage.setItem("gallery_pedro_picapiedra_likes", newLikes.toString());
      localStorage.setItem("has_liked_pedro_picapiedra", "true");
      setHasLikedPedroPicapiedra(true);
    }
  };

  const handleLikePatricioEstrella = () => {
    if (hasLikedPatricioEstrella) {
      const newLikes = patricioEstrellaLikes - 1;
      setPatricioEstrellaLikes(newLikes);
      localStorage.setItem("gallery_patricio_estrella_likes", newLikes.toString());
      localStorage.setItem("has_liked_patricio_estrella", "false");
      setHasLikedPatricioEstrella(false);
    } else {
      const newLikes = patricioEstrellaLikes + 1;
      setPatricioEstrellaLikes(newLikes);
      localStorage.setItem("gallery_patricio_estrella_likes", newLikes.toString());
      localStorage.setItem("has_liked_patricio_estrella", "true");
      setHasLikedPatricioEstrella(true);
    }
  };

  const handleLikeBoo = () => {
    if (hasLikedBoo) {
      const newLikes = booLikes - 1;
      setBooLikes(newLikes);
      localStorage.setItem("gallery_boo_likes", newLikes.toString());
      localStorage.setItem("has_liked_boo", "false");
      setHasLikedBoo(false);
    } else {
      const newLikes = booLikes + 1;
      setBooLikes(newLikes);
      localStorage.setItem("gallery_boo_likes", newLikes.toString());
      localStorage.setItem("has_liked_boo", "true");
      setHasLikedBoo(true);
    }
  };

  const handleLikeSullivanMike = () => {
    if (hasLikedSullivanMike) {
      const newLikes = sullivanMikeLikes - 1;
      setSullivanMikeLikes(newLikes);
      localStorage.setItem("gallery_sullivan_mike_likes", newLikes.toString());
      localStorage.setItem("has_liked_sullivan_mike", "false");
      setHasLikedSullivanMike(false);
    } else {
      const newLikes = sullivanMikeLikes + 1;
      setSullivanMikeLikes(newLikes);
      localStorage.setItem("gallery_sullivan_mike_likes", newLikes.toString());
      localStorage.setItem("has_liked_sullivan_mike", "true");
      setHasLikedSullivanMike(true);
    }
  };

  const handleLikeSnoopy = () => {
    if (hasLikedSnoopy) {
      const newLikes = snoopyLikes - 1;
      setSnoopyLikes(newLikes);
      localStorage.setItem("gallery_snoopy_likes", newLikes.toString());
      localStorage.setItem("has_liked_snoopy", "false");
      setHasLikedSnoopy(false);
    } else {
      const newLikes = snoopyLikes + 1;
      setSnoopyLikes(newLikes);
      localStorage.setItem("gallery_snoopy_likes", newLikes.toString());
      localStorage.setItem("has_liked_snoopy", "true");
      setHasLikedSnoopy(true);
    }
  };

  const handleLikeGrinchOrn = () => {
    if (hasLikedGrinchOrn) {
      const newLikes = grinchOrnLikes - 1;
      setGrinchOrnLikes(newLikes);
      localStorage.setItem("gallery_grinch_orn_likes", newLikes.toString());
      localStorage.setItem("has_liked_grinch_orn", "false");
      setHasLikedGrinchOrn(false);
    } else {
      const newLikes = grinchOrnLikes + 1;
      setGrinchOrnLikes(newLikes);
      localStorage.setItem("gallery_grinch_orn_likes", newLikes.toString());
      localStorage.setItem("has_liked_grinch_orn", "true");
      setHasLikedGrinchOrn(true);
    }
  };

  const handleTrackGatoClick = () => {
    const newClicks = gatoClicks + 1;
    setGatoClicks(newClicks);
    localStorage.setItem("gallery_gato_clicks", newClicks.toString());
  };

  const handleTrackGrinchClick = () => {
    const newClicks = grinchClicks + 1;
    setGrinchClicks(newClicks);
    localStorage.setItem("gallery_grinch_clicks", newClicks.toString());
  };

  const handleTrackGatoLlaveroClick = () => {
    const newClicks = gatoLlaveroClicks + 1;
    setGatoLlaveroClicks(newClicks);
    localStorage.setItem("gallery_gato_llavero_clicks", newClicks.toString());
  };

  const handleTrackMafaldaClick = () => {
    const newClicks = mafaldaClicks + 1;
    setMafaldaClicks(newClicks);
    localStorage.setItem("gallery_mafalda_clicks", newClicks.toString());
  };

  const handleTrackForkyClick = () => {
    const newClicks = forkyClicks + 1;
    setForkyClicks(newClicks);
    localStorage.setItem("gallery_forky_clicks", newClicks.toString());
  };

  const handleTrackHarryPotterClick = () => {
    const newClicks = harryPotterClicks + 1;
    setHarryPotterClicks(newClicks);
    localStorage.setItem("gallery_harry_potter_clicks", newClicks.toString());
  };

  const handleTrackChapulinClick = () => {
    const newClicks = chapulinClicks + 1;
    setChapulinClicks(newClicks);
    localStorage.setItem("gallery_chapulin_clicks", newClicks.toString());
  };

  const handleTrackPerryClick = () => {
    const newClicks = perryClicks + 1;
    setPerryClicks(newClicks);
    localStorage.setItem("gallery_perry_clicks", newClicks.toString());
  };

  const handleTrackMickeyMinnieClick = () => {
    const newClicks = mickeyMinnieClicks + 1;
    setMickeyMinnieClicks(newClicks);
    localStorage.setItem("gallery_mickey_minnie_clicks", newClicks.toString());
  };

  const handleTrackMinnieClick = () => {
    const newClicks = minnieClicks + 1;
    setMinnieClicks(newClicks);
    localStorage.setItem("gallery_minnie_clicks", newClicks.toString());
  };

  const handleTrackLlamaGafasClick = () => {
    const newClicks = llamaGafasClicks + 1;
    setLlamaGafasClicks(newClicks);
    localStorage.setItem("gallery_llama_gafas_clicks", newClicks.toString());
  };

  const handleTrackPedroPicapiedraClick = () => {
    const newClicks = pedroPicapiedraClicks + 1;
    setPedroPicapiedraClicks(newClicks);
    localStorage.setItem("gallery_pedro_picapiedra_clicks", newClicks.toString());
  };

  const handleTrackPatricioEstrellaClick = () => {
    const newClicks = patricioEstrellaClicks + 1;
    setPatricioEstrellaClicks(newClicks);
    localStorage.setItem("gallery_patricio_estrella_clicks", newClicks.toString());
  };

  const handleTrackBooClick = () => {
    const newClicks = booClicks + 1;
    setBooClicks(newClicks);
    localStorage.setItem("gallery_boo_clicks", newClicks.toString());
  };

  const handleTrackSullivanMikeClick = () => {
    const newClicks = sullivanMikeClicks + 1;
    setSullivanMikeClicks(newClicks);
    localStorage.setItem("gallery_sullivan_mike_clicks", newClicks.toString());
  };

  const handleTrackSnoopyClick = () => {
    const newClicks = snoopyClicks + 1;
    setSnoopyClicks(newClicks);
    localStorage.setItem("gallery_snoopy_clicks", newClicks.toString());
  };

  const handleTrackGrinchOrnClick = () => {
    const newClicks = grinchOrnClicks + 1;
    setGrinchOrnClicks(newClicks);
    localStorage.setItem("gallery_grinch_orn_clicks", newClicks.toString());
  };

  const handleImageUpload = (productId: string, file: File) => {
    setUploadStatus({ type: "loading", message: "Procesando y optimizando imagen..." });
    const reader = new FileReader();
    reader.onloadend = async () => {
      try {
        const rawBase64 = reader.result as string;
        // Compress base64 down to ~15KB-40KB with a 400x400 limit to respect browser quotas
        const compressedBase64 = await compressImage(rawBase64, 400, 400);

        if (productId === "gato") {
          setUserGatoImg(compressedBase64);
          try {
            localStorage.setItem("user_img_gato", compressedBase64);
            setUploadStatus({ type: "success", message: "¡Imagen del Gato con botas actualizada y guardada localmente!" });
          } catch (e) {
            console.error("Quota exceeded but image is active for session.", e);
            setUploadStatus({
              type: "error",
              message: "¡Límite de almacenamiento excedido! La imagen se mostrará durante esta sesión, pero no se pudo persistir permanentemente en este navegador."
            });
          }
        } else if (productId === "grinch") {
          setUserGrinchImg(compressedBase64);
          try {
            localStorage.setItem("user_img_grinch", compressedBase64);
            setUploadStatus({ type: "success", message: "¡Imagen del Grinch actualizada y guardada localmente!" });
          } catch (e) {
            console.error("Quota exceeded but image is active for session.", e);
            setUploadStatus({
              type: "error",
              message: "¡Límite de almacenamiento excedido! La imagen se mostrará durante esta sesión, pero no se pudo persistir permanentemente en este navegador."
            });
          }
        } else if (productId === "gato-llavero") {
          setUserGatoLlaveroImg(compressedBase64);
          try {
            localStorage.setItem("user_img_gato_llavero", compressedBase64);
            setUploadStatus({ type: "success", message: "¡Imagen del Llavero actualizada y guardada localmente!" });
          } catch (e) {
            console.error("Quota exceeded but image is active for session.", e);
            setUploadStatus({
              type: "error",
              message: "¡Límite de almacenamiento excedido! La imagen se mostrará durante esta sesión, pero no se pudo persistir permanentemente en este navegador."
            });
          }
        } else if (productId === "mafalda") {
          setUserMafaldaImg(compressedBase64);
          try {
            localStorage.setItem("user_img_mafalda", compressedBase64);
            setUploadStatus({ type: "success", message: "¡Imagen de Mafalda actualizada y guardada localmente!" });
          } catch (e) {
            console.error("Quota exceeded but image is active for session.", e);
            setUploadStatus({
              type: "error",
              message: "¡Límite de almacenamiento excedido! La imagen se mostrará durante esta sesión, pero no se pudo persistir permanentemente en este navegador."
            });
          }
        } else if (productId === "forky") {
          setUserForkyImg(compressedBase64);
          try {
            localStorage.setItem("user_img_forky", compressedBase64);
            setUploadStatus({ type: "success", message: "¡Imagen de Forki actualizada y guardada localmente!" });
          } catch (e) {
            console.error("Quota exceeded but image is active for session.", e);
            setUploadStatus({
              type: "error",
              message: "¡Límite de almacenamiento excedido! La imagen se mostrará durante esta sesión, pero no se pudo persistir permanentemente en este navegador."
            });
          }
        } else if (productId === "harry-potter") {
          setUserHarryPotterImg(compressedBase64);
          try {
            localStorage.setItem("user_img_harry_potter", compressedBase64);
            setUploadStatus({ type: "success", message: "¡Imagen de Harry Potter actualizada y guardada localmente!" });
          } catch (e) {
            console.error("Quota exceeded but image is active for session.", e);
            setUploadStatus({
              type: "error",
              message: "¡Límite de almacenamiento excedido! La imagen se mostrará durante esta sesión, pero no se pudo persistir permanentemente en este navegador."
            });
          }
        } else if (productId === "chapulin") {
          setUserChapulinImg(compressedBase64);
          try {
            localStorage.setItem("user_img_chapulin", compressedBase64);
            setUploadStatus({ type: "success", message: "¡Imagen de Chapulín Colorado actualizada y guardada localmente!" });
          } catch (e) {
            console.error("Quota exceeded but image is active for session.", e);
            setUploadStatus({
              type: "error",
              message: "¡Límite de almacenamiento excedido! La imagen se mostrará durante esta sesión, pero no se pudo persistir permanentemente en este navegador."
            });
          }
        } else if (productId === "perry") {
          setUserPerryImg(compressedBase64);
          try {
            localStorage.setItem("user_img_perry", compressedBase64);
            setUploadStatus({ type: "success", message: "¡Imagen de Perry el ornitorrinco actualizada y guardada localmente!" });
          } catch (e) {
            console.error("Quota exceeded but image is active for session.", e);
            setUploadStatus({
              type: "error",
              message: "¡Límite de almacenamiento excedido! La imagen se mostrará durante esta sesión, pero no se pudo persistir permanentemente en este navegador."
            });
          }
        } else if (productId === "mickey_minnie") {
          setUserMickeyMinnieImg(compressedBase64);
          try {
            localStorage.setItem("user_img_mickey_minnie", compressedBase64);
            setUploadStatus({ type: "success", message: "¡Imagen de Mickey Mouse actualizada y guardada localmente!" });
          } catch (e) {
            console.error("Quota exceeded but image is active for session.", e);
            setUploadStatus({
              type: "error",
              message: "¡Límite de almacenamiento excedido! La imagen se mostrará durante esta sesión, pero no se pudo persistir permanentemente en este navegador."
            });
          }
        } else if (productId === "minnie") {
          setUserMinnieImg(compressedBase64);
          try {
            localStorage.setItem("user_img_minnie", compressedBase64);
            setUploadStatus({ type: "success", message: "¡Imagen de Minnie Mouse actualizada y guardada localmente!" });
          } catch (e) {
            console.error("Quota exceeded but image is active for session.", e);
            setUploadStatus({
              type: "error",
              message: "¡Límite de almacenamiento excedido! La imagen se mostrará durante esta sesión, pero no se pudo persistir permanentemente en este navegador."
            });
          }
        } else if (productId === "llama_gafas") {
          setUserLlamaGafasImg(compressedBase64);
          try {
            localStorage.setItem("user_img_llama_gafas", compressedBase64);
            setUploadStatus({ type: "success", message: "¡Imagen de la Llama con gafas actualizada y guardada localmente!" });
          } catch (e) {
            console.error("Quota exceeded but image is active for session.", e);
            setUploadStatus({
              type: "error",
              message: "¡Límite de almacenamiento excedido! La imagen se mostrará durante esta sesión, pero no se pudo persistir permanentemente en este navegador."
            });
          }
        } else if (productId === "pedro_picapiedra") {
          setUserPedroPicapiedraImg(compressedBase64);
          try {
            localStorage.setItem("user_img_pedro_picapiedra", compressedBase64);
            setUploadStatus({ type: "success", message: "¡Imagen de Pedro Picapiedra actualizada y guardada localmente!" });
          } catch (e) {
            console.error("Quota exceeded but image is active for session.", e);
            setUploadStatus({
              type: "error",
              message: "¡Límite de almacenamiento excedido! La imagen se mostrará durante esta sesión, pero no se pudo persistir permanentemente en este navegador."
            });
          }
        } else if (productId === "patricio_estrella") {
          setUserPatricioEstrellaImg(compressedBase64);
          try {
            localStorage.setItem("user_img_patricio_estrella", compressedBase64);
            setUploadStatus({ type: "success", message: "¡Imagen de Patricio Estrella actualizada y guardada localmente!" });
          } catch (e) {
            console.error("Quota exceeded but image is active for session.", e);
            setUploadStatus({
              type: "error",
              message: "¡Límite de almacenamiento excedido! La imagen se mostrará durante esta sesión, pero no se pudo persistir permanentemente en este navegador."
            });
          }
        } else if (productId === "boo") {
          setUserBooImg(compressedBase64);
          try {
            localStorage.setItem("user_img_boo", compressedBase64);
            setUploadStatus({ type: "success", message: "¡Imagen de Boo actualizada y guardada localmente!" });
          } catch (e) {
            console.error("Quota exceeded but image is active for session.", e);
            setUploadStatus({
              type: "error",
              message: "¡Límite de almacenamiento excedido! La imagen se mostrará durante esta sesión, pero no se pudo persistir permanentemente en este navegador."
            });
          }
        } else if (productId === "sullivan_mike" || productId === "sullivan-mike") {
          setUserSullivanMikeImg(compressedBase64);
          try {
            localStorage.setItem("user_img_sullivan_mike", compressedBase64);
            setUploadStatus({ type: "success", message: "¡Imagen de Sullivan y Mike actualizada y guardada localmente!" });
          } catch (e) {
            console.error("Quota exceeded but image is active for session.", e);
            setUploadStatus({
              type: "error",
              message: "¡Límite de almacenamiento excedido! La imagen se mostrará durante esta sesión, pero no se pudo persistir permanentemente en este navegador."
            });
          }
        } else if (productId === "snoopy") {
          setUserSnoopyImg(compressedBase64);
          try {
            localStorage.setItem("user_img_snoopy", compressedBase64);
            setUploadStatus({ type: "success", message: "¡Imagen de Snoopy actualizada y guardada localmente!" });
          } catch (e) {
            console.error("Quota exceeded but image is active for session.", e);
            setUploadStatus({
              type: "error",
              message: "¡Límite de almacenamiento excedido! La imagen se mostrará durante esta sesión, pero no se pudo persistir permanentemente en este navegador."
            });
          }
        } else if (productId === "grinch_orn") {
          setUserGrinchOrnImg(compressedBase64);
          try {
            localStorage.setItem("user_img_grinch_orn", compressedBase64);
            setUploadStatus({ type: "success", message: "¡Imagen del Grinch Adorno actualizada y guardada localmente!" });
          } catch (e) {
            console.error("Quota exceeded but image is active for session.", e);
            setUploadStatus({
              type: "error",
              message: "¡Límite de almacenamiento excedido! La imagen se mostrará durante esta sesión, pero no se pudo persistir permanentemente en este navegador."
            });
          }
        } else if (productId === "hero_bg") {
          setUserHeroBg(compressedBase64);
          try {
            localStorage.setItem("user_img_hero_bg", compressedBase64);
            setUploadStatus({ type: "success", message: "¡Imagen de fondo de inicio actualizada y guardada localmente!" });
          } catch (e) {
            console.error("Quota exceeded but image is active for session.", e);
            setUploadStatus({
              type: "error",
              message: "¡Límite de almacenamiento excedido! La imagen se mostrará durante esta sesión, pero no se pudo persistir permanentemente en este navegador."
            });
          }
        }
      } catch (err) {
        console.error("Error compressing image", err);
        setUploadStatus({ type: "error", message: "Ocurrió un error al procesar la imagen." });
      }
    };
    reader.readAsDataURL(file);
  };

  const handleResetImage = (productId: string) => {
    setUploadStatus(null);
    if (productId === "gato") {
      setUserGatoImg(null);
      localStorage.removeItem("user_img_gato");
    } else if (productId === "grinch") {
      setUserGrinchImg(null);
      localStorage.removeItem("user_img_grinch");
    } else if (productId === "gato-llavero") {
      setUserGatoLlaveroImg(null);
      localStorage.removeItem("user_img_gato_llavero");
    } else if (productId === "mafalda") {
      setUserMafaldaImg(null);
      localStorage.removeItem("user_img_mafalda");
    } else if (productId === "forky") {
      setUserForkyImg(null);
      localStorage.removeItem("user_img_forky");
    } else if (productId === "harry-potter") {
      setUserHarryPotterImg(null);
      localStorage.removeItem("user_img_harry_potter");
    } else if (productId === "chapulin") {
      setUserChapulinImg(null);
      localStorage.removeItem("user_img_chapulin");
    } else if (productId === "perry") {
      setUserPerryImg(null);
      localStorage.removeItem("user_img_perry");
    } else if (productId === "mickey_minnie") {
      setUserMickeyMinnieImg(null);
      localStorage.removeItem("user_img_mickey_minnie");
    } else if (productId === "minnie") {
      setUserMinnieImg(null);
      localStorage.removeItem("user_img_minnie");
    } else if (productId === "llama_gafas") {
      setUserLlamaGafasImg(null);
      localStorage.removeItem("user_img_llama_gafas");
    } else if (productId === "pedro_picapiedra" || productId === "pedro-picapiedra") {
      setUserPedroPicapiedraImg(null);
      localStorage.removeItem("user_img_pedro_picapiedra");
    } else if (productId === "patricio_estrella" || productId === "patricio-estrella") {
      setUserPatricioEstrellaImg(null);
      localStorage.removeItem("user_img_patricio_estrella");
    } else if (productId === "boo" || productId === "boo") {
      setUserBooImg(null);
      localStorage.removeItem("user_img_boo");
    } else if (productId === "sullivan_mike" || productId === "sullivan-mike") {
      setUserSullivanMikeImg(null);
      localStorage.removeItem("user_img_sullivan_mike");
    } else if (productId === "snoopy") {
      setUserSnoopyImg(null);
      localStorage.removeItem("user_img_snoopy");
    } else if (productId === "grinch_orn") {
      setUserGrinchOrnImg(null);
      localStorage.removeItem("user_img_grinch_orn");
    } else if (productId === "hero_bg") {
      setUserHeroBg(null);
      localStorage.removeItem("user_img_hero_bg");
    }
  };

  const handleUrlSubmit = (productId: string, url: string) => {
    if (!url || !url.trim()) return;
    const cleanUrl = url.trim();
    setUploadStatus({ type: "loading", message: "Estableciendo enlace de imagen..." });
    
    if (productId === "gato") {
      setUserGatoImg(cleanUrl);
      try {
        localStorage.setItem("user_img_gato", cleanUrl);
        setUploadStatus({ type: "success", message: "¡Enlace de imagen del Gato con botas guardado!" });
      } catch (e) {
        setUploadStatus({ type: "error", message: "No se pudo guardar la URL en el navegador." });
      }
    } else if (productId === "grinch") {
      setUserGrinchImg(cleanUrl);
      try {
        localStorage.setItem("user_img_grinch", cleanUrl);
        setUploadStatus({ type: "success", message: "¡Enlace de imagen del Grinch guardado!" });
      } catch (e) {
        setUploadStatus({ type: "error", message: "No se pudo guardar la URL en el navegador." });
      }
    } else if (productId === "gato-llavero") {
      setUserGatoLlaveroImg(cleanUrl);
      try {
        localStorage.setItem("user_img_gato_llavero", cleanUrl);
        setUploadStatus({ type: "success", message: "¡Enlace de imagen del Llavero guardado!" });
      } catch (e) {
        setUploadStatus({ type: "error", message: "No se pudo guardar la URL en el navegador." });
      }
    } else if (productId === "mafalda") {
      setUserMafaldaImg(cleanUrl);
      try {
        localStorage.setItem("user_img_mafalda", cleanUrl);
        setUploadStatus({ type: "success", message: "¡Enlace de imagen de Mafalda guardado!" });
      } catch (e) {
        setUploadStatus({ type: "error", message: "No se pudo guardar la URL en el navegador." });
      }
    } else if (productId === "forky") {
      setUserForkyImg(cleanUrl);
      try {
        localStorage.setItem("user_img_forky", cleanUrl);
        setUploadStatus({ type: "success", message: "¡Enlace de imagen de Forki guardado!" });
      } catch (e) {
        setUploadStatus({ type: "error", message: "No se pudo guardar la URL en el navegador." });
      }
    } else if (productId === "harry-potter") {
      setUserHarryPotterImg(cleanUrl);
      try {
        localStorage.setItem("user_img_harry_potter", cleanUrl);
        setUploadStatus({ type: "success", message: "¡Enlace de imagen de Harry Potter guardado!" });
      } catch (e) {
        setUploadStatus({ type: "error", message: "No se pudo guardar la URL en el navegador." });
      }
    } else if (productId === "chapulin") {
      setUserChapulinImg(cleanUrl);
      try {
        localStorage.setItem("user_img_chapulin", cleanUrl);
        setUploadStatus({ type: "success", message: "¡Enlace de imagen de Chapulín Colorado guardado!" });
      } catch (e) {
        setUploadStatus({ type: "error", message: "No se pudo guardar la URL en el navegador." });
      }
    } else if (productId === "perry") {
      setUserPerryImg(cleanUrl);
      try {
        localStorage.setItem("user_img_perry", cleanUrl);
        setUploadStatus({ type: "success", message: "¡Enlace de imagen de Perry el ornitorrinco guardado!" });
      } catch (e) {
        setUploadStatus({ type: "error", message: "No se pudo guardar la URL en el navegador." });
      }
    } else if (productId === "mickey_minnie") {
      setUserMickeyMinnieImg(cleanUrl);
      try {
        localStorage.setItem("user_img_mickey_minnie", cleanUrl);
        setUploadStatus({ type: "success", message: "¡Enlace de imagen de Mickey Mouse guardado!" });
      } catch (e) {
        setUploadStatus({ type: "error", message: "No se pudo guardar la URL en el navegador." });
      }
    } else if (productId === "minnie") {
      setUserMinnieImg(cleanUrl);
      try {
        localStorage.setItem("user_img_minnie", cleanUrl);
        setUploadStatus({ type: "success", message: "¡Enlace de imagen de Minnie Mouse guardado!" });
      } catch (e) {
        setUploadStatus({ type: "error", message: "No se pudo guardar la URL en el navegador." });
      }
    } else if (productId === "llama_gafas") {
      setUserLlamaGafasImg(cleanUrl);
      try {
        localStorage.setItem("user_img_llama_gafas", cleanUrl);
        setUploadStatus({ type: "success", message: "¡Enlace de imagen de Llama con gafas guardado!" });
      } catch (e) {
        setUploadStatus({ type: "error", message: "No se pudo guardar la URL en el navegador." });
      }
    } else if (productId === "pedro_picapiedra" || productId === "pedro-picapiedra") {
      setUserPedroPicapiedraImg(cleanUrl);
      try {
        localStorage.setItem("user_img_pedro_picapiedra", cleanUrl);
        setUploadStatus({ type: "success", message: "¡Enlace de imagen de Pedro Picapiedra guardado!" });
      } catch (e) {
        setUploadStatus({ type: "error", message: "No se pudo guardar la URL en el navegador." });
      }
    } else if (productId === "patricio_estrella" || productId === "patricio-estrella") {
      setUserPatricioEstrellaImg(cleanUrl);
      try {
        localStorage.setItem("user_img_patricio_estrella", cleanUrl);
        setUploadStatus({ type: "success", message: "¡Enlace de imagen de Patricio Estrella guardado!" });
      } catch (e) {
        setUploadStatus({ type: "error", message: "No se pudo guardar la URL en el navegador." });
      }
    } else if (productId === "boo" || productId === "boo") {
      setUserBooImg(cleanUrl);
      try {
        localStorage.setItem("user_img_boo", cleanUrl);
        setUploadStatus({ type: "success", message: "¡Enlace de imagen de Boo guardado!" });
      } catch (e) {
        setUploadStatus({ type: "error", message: "No se pudo guardar la URL en el navegador." });
      }
    } else if (productId === "sullivan_mike" || productId === "sullivan-mike") {
      setUserSullivanMikeImg(cleanUrl);
      try {
        localStorage.setItem("user_img_sullivan_mike", cleanUrl);
        setUploadStatus({ type: "success", message: "¡Enlace de imagen de Sullivan y Mike guardado!" });
      } catch (e) {
        setUploadStatus({ type: "error", message: "No se pudo guardar la URL en el navegador." });
      }
    } else if (productId === "snoopy") {
      setUserSnoopyImg(cleanUrl);
      try {
        localStorage.setItem("user_img_snoopy", cleanUrl);
        setUploadStatus({ type: "success", message: "¡Enlace de imagen de Snoopy guardado!" });
      } catch (e) {
        setUploadStatus({ type: "error", message: "No se pudo guardar la URL en el navegador." });
      }
    } else if (productId === "grinch_orn") {
      setUserGrinchOrnImg(cleanUrl);
      try {
        localStorage.setItem("user_img_grinch_orn", cleanUrl);
        setUploadStatus({ type: "success", message: "¡Enlace de imagen de Grinch Adorno guardado!" });
      } catch (e) {
        setUploadStatus({ type: "error", message: "No se pudo guardar la URL en el navegador." });
      }
    } else if (productId === "hero_bg") {
      setUserHeroBg(cleanUrl);
      try {
        localStorage.setItem("user_img_hero_bg", cleanUrl);
        setUploadStatus({ type: "success", message: "¡Enlace de imagen de fondo de inicio guardado!" });
      } catch (e) {
        setUploadStatus({ type: "error", message: "No se pudo guardar la URL en el navegador." });
      }
    }
  };

  // Helpers to bind dynamic ranking button upvotes to active states
  const handleLikeById = (id: string) => {
    switch (id) {
      case "gato": handleLikeGato(); break;
      case "grinch": handleLikeGrinch(); break;
      case "gato_llavero": handleLikeGatoLlavero(); break;
      case "mafalda": handleLikeMafalda(); break;
      case "forky": handleLikeForky(); break;
      case "harry_potter": handleLikeHarryPotter(); break;
      case "chapulin": handleLikeChapulin(); break;
      case "perry": handleLikePerry(); break;
      case "mickey_minnie": handleLikeMickeyMinnie(); break;
      case "minnie": handleLikeMinnie(); break;
      case "llama_gafas": handleLikeLlamaGafas(); break;
      case "pedro_picapiedra": case "pedro-picapiedra": handleLikePedroPicapiedra(); break;
      case "patricio_estrella": case "patricio-estrella": handleLikePatricioEstrella(); break;
      case "boo": case "boo": handleLikeBoo(); break;
      case "sullivan_mike": case "sullivan-mike": handleLikeSullivanMike(); break;
      case "snoopy": handleLikeSnoopy(); break;
      case "grinch_orn": handleLikeGrinchOrn(); break;
      default: break;
    }
  };

  const hasLikedById = (id: string) => {
    switch (id) {
      case "gato": return hasLikedGato;
      case "grinch": return hasLikedGrinch;
      case "gato_llavero": return hasLikedGatoLlavero;
      case "mafalda": return hasLikedMafalda;
      case "forky": return hasLikedForky;
      case "harry_potter": return hasLikedHarryPotter;
      case "chapulin": return hasLikedChapulin;
      case "perry": return hasLikedPerry;
      case "mickey_minnie": return hasLikedMickeyMinnie;
      case "minnie": return hasLikedMinnie;
      case "llama_gafas": return hasLikedLlamaGafas;
      case "pedro_picapiedra": case "pedro-picapiedra": return hasLikedPedroPicapiedra;
      case "patricio_estrella": case "patricio-estrella": return hasLikedPatricioEstrella;
      case "boo": case "boo": return hasLikedBoo;
      case "sullivan_mike": case "sullivan-mike": return hasLikedSullivanMike;
      case "snoopy": return hasLikedSnoopy;
      case "grinch_orn": return hasLikedGrinchOrn;
      default: return false;
    }
  };

  // State auxiliary controls for text inputs inside the admin ui
  const [gatoUrlInput, setGatoUrlInput] = useState("");
  const [grinchUrlInput, setGrinchUrlInput] = useState("");
  const [gatoLlaveroUrlInput, setGatoLlaveroUrlInput] = useState("");
  const [mafaldaUrlInput, setMafaldaUrlInput] = useState("");
  const [forkyUrlInput, setForkyUrlInput] = useState("");
  const [harryPotterUrlInput, setHarryPotterUrlInput] = useState("");
  const [chapulinUrlInput, setChapulinUrlInput] = useState("");
  const [perryUrlInput, setPerryUrlInput] = useState("");
  const [mickeyMinnieUrlInput, setMickeyMinnieUrlInput] = useState("");
  const [minnieUrlInput, setMinnieUrlInput] = useState("");
  const [llamaGafasUrlInput, setLlamaGafasUrlInput] = useState("");
  const [pedroPicapiedraUrlInput, setPedroPicapiedraUrlInput] = useState("");
  const [patricioEstrellaUrlInput, setPatricioEstrellaUrlInput] = useState("");
  const [booUrlInput, setBooUrlInput] = useState("");
  const [sullivanMikeUrlInput, setSullivanMikeUrlInput] = useState("");
  const [snoopyUrlInput, setSnoopyUrlInput] = useState("");
  const [grinchOrnUrlInput, setGrinchOrnUrlInput] = useState("");

  // Remaining blank/coming soon cards count
  const remainingBoxesCount = 0;
  const blankBoxes = Array.from({ length: remainingBoxesCount });

  const totalLikes = gatoLikes + grinchLikes + gatoLlaveroLikes + mafaldaLikes + forkyLikes + harryPotterLikes + chapulinLikes + perryLikes + mickeyMinnieLikes + minnieLikes + llamaGafasLikes + pedroPicapiedraLikes + patricioEstrellaLikes + booLikes + sullivanMikeLikes + snoopyLikes + grinchOrnLikes;
  const totalClicks = gatoClicks + grinchClicks + gatoLlaveroClicks + mafaldaClicks + forkyClicks + harryPotterClicks + chapulinClicks + perryClicks + mickeyMinnieClicks + minnieClicks + llamaGafasClicks + pedroPicapiedraClicks + patricioEstrellaClicks + booClicks + sullivanMikeClicks + snoopyClicks + grinchOrnClicks;
  const rawRatio = views > 0 ? ((totalClicks / views) * 100) : 0;
  // Make conversion rate look like a refined professional metrics ratio
  const conversionRate = Math.min(Math.max(Math.round(rawRatio), 4), 98);

  // Dynamic Popularity Ranking calculation updated live
  const popularityRanking = [
    { id: "gato", name: "Gato con Botas", likes: gatoLikes, candidates: gatoCandidates, size: "Edición Especial" },
    { id: "grinch", name: "El Grinch Navideño", likes: grinchLikes, candidates: grinchCandidates, size: "Mediano" },
    { id: "gato_llavero", name: "Michi Sombrero", likes: gatoLlaveroLikes, candidates: gatoLlaveroCandidates, size: "Tamaño Llavero" },
    { id: "mafalda", name: "Mafalda", likes: mafaldaLikes, candidates: mafaldaCandidates, size: "Mediano" },
    { id: "forky", name: "Forky Handcrafted", likes: forkyLikes, candidates: forkyCandidates, size: "Tamaño Llavero" },
    { id: "harry_potter", name: "Harry Potter", likes: harryPotterLikes, candidates: harryPotterCandidates, size: "Edición Especial" },
    { id: "chapulin", name: "Chapulín Colorado", likes: chapulinLikes, candidates: chapulinCandidates, size: "Mediano" },
    { id: "perry", name: "Perry el ornitorrinco", likes: perryLikes, candidates: perryCandidates, size: "Tamaño Llavero" },
    { id: "mickey_minnie", name: "Mickey Mouse", likes: mickeyMinnieLikes, candidates: mickeyMinnieCandidates, size: "Llavero / Accesorio" },
    { id: "minnie", name: "Minnie Mouse", likes: minnieLikes, candidates: minnieCandidates, size: "Llavero / Accesorio" },
    { id: "llama_gafas", name: "Llama con gafas", likes: llamaGafasLikes, candidates: llamaGafasCandidates, size: "Llavero / Accesorio" },
    { id: "pedro_picapiedra", name: "Pedro Picapiedra", likes: pedroPicapiedraLikes, candidates: pedroPicapiedraCandidates, size: "Mediano" },
    { id: "patricio_estrella", name: "Patricio Estrella", likes: patricioEstrellaLikes, candidates: patricioEstrellaCandidates, size: "Mediano" },
    { id: "boo", name: "Boo - Monsters Inc.", likes: booLikes, candidates: booCandidates, size: "Mediano" },
    { id: "sullivan_mike", name: "Sullivan y Mike Wazowski", likes: sullivanMikeLikes, candidates: sullivanMikeCandidates, size: "Edición Especial" },
    { id: "snoopy", name: "Snoopy", likes: snoopyLikes, candidates: snoopyCandidates, size: "Mediano" },
    { id: "grinch_orn", name: "Grinch", likes: grinchOrnLikes, candidates: grinchOrnCandidates, size: "Mediano" }
  ].sort((a, b) => b.likes - a.likes);

  const maxLikes = Math.max(...popularityRanking.map(item => item.likes), 1);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-32 pb-24 bg-brand-bg/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 space-y-4">
          <span className="text-brand-pink font-bold tracking-widest uppercase text-sm flex items-center justify-center gap-1">
            <Sparkles className="w-4 h-4 text-brand-pink animate-spin" /> Nuestro Arte
          </span>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-brand-brown">
            Galería de <span className="text-brand-pink">Tejidos</span>
          </h1>
          <p className="text-xl text-brand-brown/70 max-w-2xl mx-auto">
            Explora el mundo de hilos de Primavera rosa. Cada pieza es una creación única hecha para ti.
          </p>
          
          <div className="pt-2">
            <button
              onClick={() => setIsAdminOpen(!isAdminOpen)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-brand-brown border-2 border-brand-pink hover:bg-brand-pink/5 text-sm font-bold rounded-full shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer"
            >
              <Settings className={`w-4 h-4 text-brand-pink ${isAdminOpen ? 'rotate-180' : ''} transition-all duration-500`} />
              <span>{isAdminOpen ? "Cerrar Panel de Personalización" : "⚙️ Personalizar Fotos del Catálogo"}</span>
            </button>
          </div>
        </div>

        {/* Panel de Personalización de Fotos del Catálogo */}
        {isAdminOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="bg-white/95 backdrop-blur-md rounded-3xl p-6 md:p-8 border-2 border-brand-pink/30 shadow-lg max-w-4xl mx-auto mb-16 space-y-6 overflow-hidden text-left"
          >
            <div className="flex items-start gap-4 border-b border-brand-pink/10 pb-4">
              <div className="p-2.5 bg-brand-pink/15 rounded-xl text-brand-pink">
                <Settings className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <h2 className="font-serif text-2xl font-bold text-brand-brown">
                  Gestión Manual del Catálogo de Amigurumis
                </h2>
                <p className="text-sm text-brand-brown/70">
                  Aquí puedes subir tus propias fotos o ingresar enlaces directos de internet para actualizar las imágenes que tus clientes verán en el catálogo virtual. Se guardarán en tu navegador automáticamente.
                </p>
              </div>
            </div>

            {uploadStatus && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-2xl flex items-start gap-3 border text-sm ${
                  uploadStatus.type === "success"
                    ? "bg-emerald-50 text-emerald-805 border-emerald-200"
                    : uploadStatus.type === "error"
                    ? "bg-rose-50 text-rose-900 border-rose-200"
                    : "bg-amber-50 text-amber-800 border-amber-200 animate-pulse"
                }`}
              >
                <div className="flex-grow">
                  <span className="font-bold">
                    {uploadStatus.type === "success" && "¡Completado!"}
                    {uploadStatus.type === "loading" && "Un momento..."}
                    {uploadStatus.type === "error" && "Aviso de almacenamiento:"}
                  </span>{" "}
                  {uploadStatus.message}
                </div>
                <button
                  type="button"
                  onClick={() => setUploadStatus(null)}
                  className="p-1 hover:bg-black/5 rounded-lg transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4 text-brand-brown/60" />
                </button>
              </motion.div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-8 gap-6">
              {/* Producto 1: Gato con botas */}
              <div className="bg-brand-bg/40 rounded-2xl p-4 border border-brand-pink/10 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold tracking-wider uppercase text-brand-pink">Producto 1</span>
                  <h3 className="font-bold text-brand-brown text-base mb-2">Gato con botas (Grande)</h3>
                  
                  <div className="rounded-xl overflow-hidden aspect-[4/3] bg-brand-bg/80 relative mb-4 border border-brand-pink/10">
                    <img 
                      src={gatoCandidates[0]} 
                      alt="Miniatura Gato" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200">
                      <span className="text-white text-xs font-bold">Vista Previa</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  {/* File Upload Button */}
                  <div>
                    <label className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-brand-pink hover:bg-brand-pink/90 text-white text-xs font-bold rounded-xl shadow-xs transition-all duration-300 cursor-pointer">
                      <Upload className="w-3.5 h-3.5" />
                      <span>Subir Foto o Llavero</span>
                      <input 
                        type="file" 
                        accept="image/*" 
                        className="hidden" 
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) handleImageUpload("gato", file);
                        }}
                      />
                    </label>
                  </div>

                  {/* URL Input */}
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-brand-brown/50">O ingresar enlace de imagen:</span>
                    <div className="flex gap-1">
                      <input 
                        type="text" 
                        placeholder="https://..." 
                        value={gatoUrlInput}
                        onChange={(e) => setGatoUrlInput(e.target.value)}
                        className="flex-grow text-xs px-2.5 py-1.5 rounded-lg border border-brand-pink/20 bg-white text-brand-brown focus:outline-none focus:border-brand-pink"
                      />
                      <button 
                        onClick={() => {
                          handleUrlSubmit("gato", gatoUrlInput);
                          setGatoUrlInput("");
                        }}
                        className="px-3 bg-brand-cyan text-brand-brown text-xs font-bold rounded-lg hover:brightness-95 active:scale-95 transition-all cursor-pointer"
                      >
                        Establecer
                      </button>
                    </div>
                  </div>

                  {/* Reset Override */}
                  {userGatoImg && (
                    <button 
                      onClick={() => handleResetImage("gato")}
                      className="w-full flex items-center justify-center gap-1.5 py-1 text-[11px] font-bold text-red-500 hover:text-red-600 transition-colors"
                    >
                      <RefreshCw className="w-3 h-3 text-red-500" />
                      <span>Revertir a original</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Producto 2: El Grinch */}
              <div className="bg-brand-bg/40 rounded-2xl p-4 border border-brand-pink/10 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold tracking-wider uppercase text-brand-pink">Producto 2</span>
                  <h3 className="font-bold text-brand-brown text-base mb-2">El Grinch (Navideño)</h3>
                  
                  <div className="rounded-xl overflow-hidden aspect-[4/3] bg-brand-bg/80 relative mb-4 border border-brand-pink/10">
                    <img 
                      src={grinchCandidates[0]} 
                      alt="Miniatura Grinch" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200">
                      <span className="text-white text-xs font-bold">Vista Previa</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-brand-pink hover:bg-brand-pink/90 text-white text-xs font-bold rounded-xl shadow-xs transition-all duration-300 cursor-pointer">
                      <Upload className="w-3.5 h-3.5" />
                      <span>Subir Foto o Llavero</span>
                      <input 
                        type="file" 
                        accept="image/*" 
                        className="hidden" 
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) handleImageUpload("grinch", file);
                        }}
                      />
                    </label>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-brand-brown/50">O ingresar enlace de imagen:</span>
                    <div className="flex gap-1">
                      <input 
                        type="text" 
                        placeholder="https://..." 
                        value={grinchUrlInput}
                        onChange={(e) => setGrinchUrlInput(e.target.value)}
                        className="flex-grow text-xs px-2.5 py-1.5 rounded-lg border border-brand-pink/20 bg-white text-brand-brown focus:outline-none focus:border-brand-pink"
                      />
                      <button 
                        onClick={() => {
                          handleUrlSubmit("grinch", grinchUrlInput);
                          setGrinchUrlInput("");
                        }}
                        className="px-3 bg-brand-cyan text-brand-brown text-xs font-bold rounded-lg hover:brightness-95 active:scale-95 transition-all cursor-pointer"
                      >
                        Establecer
                      </button>
                    </div>
                  </div>

                  {userGrinchImg && (
                    <button 
                      onClick={() => handleResetImage("grinch")}
                      className="w-full flex items-center justify-center gap-1.5 py-1 text-[11px] font-bold text-red-500 hover:text-red-600 transition-colors"
                    >
                      <RefreshCw className="w-3 h-3 text-red-500" />
                      <span>Revertir a original</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Producto 3: Gato con botas Llavero */}
              <div className="bg-brand-bg/40 rounded-2xl p-4 border border-brand-pink/10 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold tracking-wider uppercase text-brand-pink">Producto 3</span>
                  <h3 className="font-bold text-brand-brown text-base mb-2">Gato con botas (Llavero)</h3>
                  
                  <div className="rounded-xl overflow-hidden aspect-[4/3] bg-brand-bg/80 relative mb-4 border border-brand-pink/10">
                    <img 
                      src={gatoLlaveroCandidates[0]} 
                      alt="Miniatura Llavero Gato" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200">
                      <span className="text-white text-xs font-bold">Vista Previa</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-brand-pink hover:bg-brand-pink/90 text-white text-xs font-bold rounded-xl shadow-xs transition-all duration-300 cursor-pointer">
                      <Upload className="w-3.5 h-3.5" />
                      <span>Subir Foto o Llavero</span>
                      <input 
                        type="file" 
                        accept="image/*" 
                        className="hidden" 
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) handleImageUpload("gato-llavero", file);
                        }}
                      />
                    </label>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-brand-brown/50">O ingresar enlace de imagen:</span>
                    <div className="flex gap-1">
                      <input 
                        type="text" 
                        placeholder="https://..." 
                        value={gatoLlaveroUrlInput}
                        onChange={(e) => setGatoLlaveroUrlInput(e.target.value)}
                        className="flex-grow text-xs px-2.5 py-1.5 rounded-lg border border-brand-pink/20 bg-white text-brand-brown focus:outline-none focus:border-brand-pink"
                      />
                      <button 
                        onClick={() => {
                          handleUrlSubmit("gato-llavero", gatoLlaveroUrlInput);
                          setGatoLlaveroUrlInput("");
                        }}
                        className="px-3 bg-brand-cyan text-brand-brown text-xs font-bold rounded-lg hover:brightness-95 active:scale-95 transition-all cursor-pointer"
                      >
                        Establecer
                      </button>
                    </div>
                  </div>

                  {userGatoLlaveroImg && (
                    <button 
                      onClick={() => handleResetImage("gato-llavero")}
                      className="w-full flex items-center justify-center gap-1.5 py-1 text-[11px] font-bold text-red-500 hover:text-red-600 transition-colors"
                    >
                      <RefreshCw className="w-3 h-3 text-red-500" />
                      <span>Revertir a original</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Producto 4: Mafalda */}
              <div className="bg-brand-bg/40 rounded-2xl p-4 border border-brand-pink/10 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold tracking-wider uppercase text-brand-pink">Producto 4</span>
                  <h3 className="font-bold text-brand-brown text-base mb-2">Mafalda (Llavero / Muñeca)</h3>
                  
                  <div className="rounded-xl overflow-hidden aspect-[4/3] bg-brand-bg/80 relative mb-4 border border-brand-pink/10">
                    <img 
                      src={mafaldaCandidates[0]} 
                      alt="Miniatura Mafalda" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200">
                      <span className="text-white text-xs font-bold">Vista Previa</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-brand-pink hover:bg-brand-pink/90 text-white text-xs font-bold rounded-xl shadow-xs transition-all duration-300 cursor-pointer">
                      <Upload className="w-3.5 h-3.5" />
                      <span>Subir Foto o Llavero</span>
                      <input 
                        type="file" 
                        accept="image/*" 
                        className="hidden" 
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) handleImageUpload("mafalda", file);
                        }}
                      />
                    </label>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-brand-brown/50">O ingresar enlace de imagen:</span>
                    <div className="flex gap-1">
                      <input 
                        type="text" 
                        placeholder="https://..." 
                        value={mafaldaUrlInput}
                        onChange={(e) => setMafaldaUrlInput(e.target.value)}
                        className="flex-grow text-xs px-2.5 py-1.5 rounded-lg border border-brand-pink/20 bg-white text-brand-brown focus:outline-none focus:border-brand-pink"
                      />
                      <button 
                        onClick={() => {
                          handleUrlSubmit("mafalda", mafaldaUrlInput);
                          setMafaldaUrlInput("");
                        }}
                        className="px-3 bg-brand-cyan text-brand-brown text-xs font-bold rounded-lg hover:brightness-95 active:scale-95 transition-all cursor-pointer"
                      >
                        Establecer
                      </button>
                    </div>
                  </div>

                  {userMafaldaImg && (
                    <button 
                      onClick={() => handleResetImage("mafalda")}
                      className="w-full flex items-center justify-center gap-1.5 py-1 text-[11px] font-bold text-red-500 hover:text-red-600 transition-colors"
                    >
                      <RefreshCw className="w-3 h-3 text-red-500" />
                      <span>Revertir a original</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Producto 5: Forky */}
              <div className="bg-brand-bg/40 rounded-2xl p-4 border border-brand-pink/10 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold tracking-wider uppercase text-brand-pink">Producto 5</span>
                  <h3 className="font-bold text-brand-brown text-base mb-2">Forki (Miniatura / Adorno)</h3>
                  
                  <div className="rounded-xl overflow-hidden aspect-[4/3] bg-brand-bg/80 relative mb-4 border border-brand-pink/10">
                    <img 
                      src={forkyCandidates[0]} 
                      alt="Miniatura Forky" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200">
                      <span className="text-white text-xs font-bold">Vista Previa</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-brand-pink hover:bg-brand-pink/90 text-white text-xs font-bold rounded-xl shadow-xs transition-all duration-300 cursor-pointer">
                      <Upload className="w-3.5 h-3.5" />
                      <span>Subir Foto o Llavero</span>
                      <input 
                        type="file" 
                        accept="image/*" 
                        className="hidden" 
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) handleImageUpload("forky", file);
                        }}
                      />
                    </label>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-brand-brown/50">O ingresar enlace de imagen:</span>
                    <div className="flex gap-1">
                      <input 
                        type="text" 
                        placeholder="https://..." 
                        value={forkyUrlInput}
                        onChange={(e) => setForkyUrlInput(e.target.value)}
                        className="flex-grow text-xs px-2.5 py-1.5 rounded-lg border border-brand-pink/20 bg-white text-brand-brown focus:outline-none focus:border-brand-pink"
                      />
                      <button 
                        onClick={() => {
                          handleUrlSubmit("forky", forkyUrlInput);
                          setForkyUrlInput("");
                        }}
                        className="px-3 bg-brand-cyan text-brand-brown text-xs font-bold rounded-lg hover:brightness-95 active:scale-95 transition-all cursor-pointer"
                      >
                        Establecer
                      </button>
                    </div>
                  </div>

                  {userForkyImg && (
                    <button 
                      onClick={() => handleResetImage("forky")}
                      className="w-full flex items-center justify-center gap-1.5 py-1 text-[11px] font-bold text-red-500 hover:text-red-600 transition-colors"
                    >
                      <RefreshCw className="w-3 h-3 text-red-500" />
                      <span>Revertir a original</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Producto 6: Harry Potter */}
              <div className="bg-brand-bg/40 rounded-2xl p-4 border border-brand-pink/10 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold tracking-wider uppercase text-brand-pink">Producto 6</span>
                  <h3 className="font-bold text-brand-brown text-base mb-2">Harry Potter (Colección)</h3>
                  
                  <div className="rounded-xl overflow-hidden aspect-[4/3] bg-brand-bg/80 relative mb-4 border border-brand-pink/10">
                    <img 
                      src={harryPotterCandidates[0]} 
                      alt="Miniatura Harry Potter" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200">
                      <span className="text-white text-xs font-bold">Vista Previa</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-brand-pink hover:bg-brand-pink/90 text-white text-xs font-bold rounded-xl shadow-xs transition-all duration-300 cursor-pointer">
                      <Upload className="w-3.5 h-3.5" />
                      <span>Subir Foto o Llavero</span>
                      <input 
                        type="file" 
                        accept="image/*" 
                        className="hidden" 
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) handleImageUpload("harry-potter", file);
                        }}
                      />
                    </label>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-brand-brown/50">O ingresar enlace de imagen:</span>
                    <div className="flex gap-1">
                      <input 
                        type="text" 
                        placeholder="https://..." 
                        value={harryPotterUrlInput}
                        onChange={(e) => setHarryPotterUrlInput(e.target.value)}
                        className="flex-grow text-xs px-2.5 py-1.5 rounded-lg border border-brand-pink/20 bg-white text-brand-brown focus:outline-none focus:border-brand-pink"
                      />
                      <button 
                        onClick={() => {
                          handleUrlSubmit("harry-potter", harryPotterUrlInput);
                          setHarryPotterUrlInput("");
                        }}
                        className="px-3 bg-brand-cyan text-brand-brown text-xs font-bold rounded-lg hover:brightness-95 active:scale-95 transition-all cursor-pointer"
                      >
                        Establecer
                      </button>
                    </div>
                  </div>

                  {userHarryPotterImg && (
                    <button 
                      onClick={() => handleResetImage("harry-potter")}
                      className="w-full flex items-center justify-center gap-1.5 py-1 text-[11px] font-bold text-red-500 hover:text-red-600 transition-colors"
                    >
                      <RefreshCw className="w-3 h-3 text-red-500" />
                      <span>Revertir a original</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Producto 7: Chapulín Colorado */}
              <div className="bg-brand-bg/40 rounded-2xl p-4 border border-brand-pink/10 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold tracking-wider uppercase text-brand-pink">Producto 7</span>
                  <h3 className="font-bold text-brand-brown text-base mb-2">Chapulín Colorado</h3>
                  
                  <div className="rounded-xl overflow-hidden aspect-[4/3] bg-brand-bg/80 relative mb-4 border border-brand-pink/10">
                    <img 
                      src={chapulinCandidates[0]} 
                      alt="Miniatura Chapulín Colorado" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200">
                      <span className="text-white text-xs font-bold">Vista Previa</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-brand-pink hover:bg-brand-pink/90 text-white text-xs font-bold rounded-xl shadow-xs transition-all duration-300 cursor-pointer">
                      <Upload className="w-3.5 h-3.5" />
                      <span>Subir Foto o Llavero</span>
                      <input 
                        type="file" 
                        accept="image/*" 
                        className="hidden" 
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) handleImageUpload("chapulin", file);
                        }}
                      />
                    </label>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-brand-brown/50">O ingresar enlace de imagen:</span>
                    <div className="flex gap-1">
                      <input 
                        type="text" 
                        placeholder="https://..." 
                        value={chapulinUrlInput}
                        onChange={(e) => setChapulinUrlInput(e.target.value)}
                        className="flex-grow text-xs px-2.5 py-1.5 rounded-lg border border-brand-pink/20 bg-white text-brand-brown focus:outline-none focus:border-brand-pink"
                      />
                      <button 
                        onClick={() => {
                          handleUrlSubmit("chapulin", chapulinUrlInput);
                          setChapulinUrlInput("");
                        }}
                        className="px-3 bg-brand-cyan text-brand-brown text-xs font-bold rounded-lg hover:brightness-95 active:scale-95 transition-all cursor-pointer"
                      >
                        Establecer
                      </button>
                    </div>
                  </div>

                  {userChapulinImg && (
                    <button 
                      onClick={() => handleResetImage("chapulin")}
                      className="w-full flex items-center justify-center gap-1.5 py-1 text-[11px] font-bold text-red-500 hover:text-red-600 transition-colors"
                    >
                      <RefreshCw className="w-3 h-3 text-red-500" />
                      <span>Revertir a original</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Producto 8: Perry el ornitorrinco */}
              <div className="bg-brand-bg/40 rounded-2xl p-4 border border-brand-pink/10 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold tracking-wider uppercase text-brand-pink">Producto 8</span>
                  <h3 className="font-bold text-brand-brown text-base mb-2">Perry el ornitorrinco</h3>
                  
                  <div className="rounded-xl overflow-hidden aspect-[4/3] bg-brand-bg/80 relative mb-4 border border-brand-pink/10">
                    <img 
                      src={perryCandidates[0]} 
                      alt="Miniatura Perry el ornitorrinco" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200">
                      <span className="text-white text-xs font-bold">Vista Previa</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-brand-pink hover:bg-brand-pink/90 text-white text-xs font-bold rounded-xl shadow-xs transition-all duration-300 cursor-pointer">
                      <Upload className="w-3.5 h-3.5" />
                      <span>Subir Foto o Llavero</span>
                      <input 
                        type="file" 
                        accept="image/*" 
                        className="hidden" 
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) handleImageUpload("perry", file);
                        }}
                      />
                    </label>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-brand-brown/50">O ingresar enlace de imagen:</span>
                    <div className="flex gap-1">
                      <input 
                        type="text" 
                        placeholder="https://..." 
                        value={perryUrlInput}
                        onChange={(e) => setPerryUrlInput(e.target.value)}
                        className="flex-grow text-xs px-2.5 py-1.5 rounded-lg border border-brand-pink/20 bg-white text-brand-brown focus:outline-none focus:border-brand-pink"
                      />
                      <button 
                        onClick={() => {
                          handleUrlSubmit("perry", perryUrlInput);
                          setPerryUrlInput("");
                        }}
                        className="px-3 bg-brand-cyan text-brand-brown text-xs font-bold rounded-lg hover:brightness-95 active:scale-95 transition-all cursor-pointer"
                      >
                        Establecer
                      </button>
                    </div>
                  </div>

                  {userPerryImg && (
                    <button 
                      onClick={() => handleResetImage("perry")}
                      className="w-full flex items-center justify-center gap-1.5 py-1 text-[11px] font-bold text-red-500 hover:text-red-600 transition-colors"
                    >
                      <RefreshCw className="w-3.5 h-3.5 text-red-500" />
                      <span>Revertir a original</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Producto 9: Mickey Mouse */}
              <div className="bg-brand-bg/40 rounded-2xl p-4 border border-brand-pink/10 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold tracking-wider uppercase text-brand-pink">Producto 9</span>
                  <h3 className="font-bold text-brand-brown text-base mb-2">Mickey Mouse</h3>
                  
                  <div className="rounded-xl overflow-hidden aspect-[4/3] bg-brand-bg/80 relative mb-4 border border-brand-pink/10">
                    <img 
                      src={mickeyMinnieCandidates[0]} 
                      alt="Miniatura Mickey Mouse" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200">
                      <span className="text-white text-xs font-bold">Vista Previa</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-brand-pink hover:bg-brand-pink/90 text-white text-xs font-bold rounded-xl shadow-xs transition-all duration-300 cursor-pointer">
                      <Upload className="w-3.5 h-3.5" />
                      <span>Subir Foto o Llavero</span>
                      <input 
                        type="file" 
                        accept="image/*" 
                        className="hidden" 
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) handleImageUpload("mickey_minnie", file);
                        }}
                      />
                    </label>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-brand-brown/50">O ingresar enlace de imagen:</span>
                    <div className="flex gap-1">
                      <input 
                        type="text" 
                        placeholder="https://..." 
                        value={mickeyMinnieUrlInput}
                        onChange={(e) => setMickeyMinnieUrlInput(e.target.value)}
                        className="flex-grow text-xs px-2.5 py-1.5 rounded-lg border border-brand-pink/20 bg-white text-brand-brown focus:outline-none focus:border-brand-pink"
                      />
                      <button 
                        onClick={() => {
                          handleUrlSubmit("mickey_minnie", mickeyMinnieUrlInput);
                          setMickeyMinnieUrlInput("");
                        }}
                        className="px-3 bg-brand-cyan text-brand-brown text-xs font-bold rounded-lg hover:brightness-95 active:scale-95 transition-all cursor-pointer"
                      >
                        Establecer
                      </button>
                    </div>
                  </div>

                  {userMickeyMinnieImg && (
                    <button 
                      onClick={() => handleResetImage("mickey_minnie")}
                      className="w-full flex items-center justify-center gap-1.5 py-1 text-[11px] font-bold text-red-500 hover:text-red-600 transition-colors"
                    >
                      <RefreshCw className="w-3.5 h-3.5 text-red-500" />
                      <span>Revertir a original</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Producto 10: Minnie Mouse */}
              <div className="bg-brand-bg/40 rounded-2xl p-4 border border-brand-pink/10 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold tracking-wider uppercase text-brand-pink">Producto 10</span>
                  <h3 className="font-bold text-brand-brown text-base mb-2">Minnie Mouse</h3>
                  
                  <div className="rounded-xl overflow-hidden aspect-[4/3] bg-brand-bg/80 relative mb-4 border border-brand-pink/10">
                    <img 
                      src={minnieCandidates[0]} 
                      alt="Miniatura Minnie Mouse" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200">
                      <span className="text-white text-xs font-bold">Vista Previa</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-brand-pink hover:bg-brand-pink/90 text-white text-xs font-bold rounded-xl shadow-xs transition-all duration-300 cursor-pointer">
                      <Upload className="w-3.5 h-3.5" />
                      <span>Subir Foto o Llavero</span>
                      <input 
                        type="file" 
                        accept="image/*" 
                        className="hidden" 
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) handleImageUpload("minnie", file);
                        }}
                      />
                    </label>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-brand-brown/50">O ingresar enlace de imagen:</span>
                    <div className="flex gap-1">
                      <input 
                        type="text" 
                        placeholder="https://..." 
                        value={minnieUrlInput}
                        onChange={(e) => setMinnieUrlInput(e.target.value)}
                        className="flex-grow text-xs px-2.5 py-1.5 rounded-lg border border-brand-pink/20 bg-white text-brand-brown focus:outline-none focus:border-brand-pink"
                      />
                      <button 
                        onClick={() => {
                          handleUrlSubmit("minnie", minnieUrlInput);
                          setMinnieUrlInput("");
                        }}
                        className="px-3 bg-brand-cyan text-brand-brown text-xs font-bold rounded-lg hover:brightness-95 active:scale-95 transition-all cursor-pointer"
                      >
                        Establecer
                      </button>
                    </div>
                  </div>

                  {userMinnieImg && (
                    <button 
                      onClick={() => handleResetImage("minnie")}
                      className="w-full flex items-center justify-center gap-1.5 py-1 text-[11px] font-bold text-red-500 hover:text-red-600 transition-colors"
                    >
                      <RefreshCw className="w-3.5 h-3.5 text-red-500" />
                      <span>Revertir a original</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Producto 11: Llama con gafas */}
              <div className="bg-brand-bg/40 rounded-2xl p-4 border border-brand-pink/10 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold tracking-wider uppercase text-brand-pink">Producto 11</span>
                  <h3 className="font-bold text-brand-brown text-base mb-2">Llama con gafas</h3>
                  
                  <div className="rounded-xl overflow-hidden aspect-[4/3] bg-brand-bg/80 relative mb-4 border border-brand-pink/10">
                    <img 
                      src={llamaGafasCandidates[0]} 
                      alt="Miniatura Llama con gafas" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200">
                      <span className="text-white text-xs font-bold">Vista Previa</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-brand-pink hover:bg-brand-pink/90 text-white text-xs font-bold rounded-xl shadow-xs transition-all duration-300 cursor-pointer">
                      <Upload className="w-3.5 h-3.5" />
                      <span>Subir Foto o Llavero</span>
                      <input 
                        type="file" 
                        accept="image/*" 
                        className="hidden" 
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) handleImageUpload("llama_gafas", file);
                        }}
                      />
                    </label>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-brand-brown/50">O ingresar enlace de imagen:</span>
                    <div className="flex gap-1">
                      <input 
                        type="text" 
                        placeholder="https://..." 
                        value={llamaGafasUrlInput}
                        onChange={(e) => setLlamaGafasUrlInput(e.target.value)}
                        className="flex-grow text-xs px-2.5 py-1.5 rounded-lg border border-brand-pink/20 bg-white text-brand-brown focus:outline-none focus:border-brand-pink"
                      />
                      <button 
                        onClick={() => {
                          handleUrlSubmit("llama_gafas", llamaGafasUrlInput);
                          setLlamaGafasUrlInput("");
                        }}
                        className="px-3 bg-brand-cyan text-brand-brown text-xs font-bold rounded-lg hover:brightness-95 active:scale-95 transition-all cursor-pointer"
                      >
                        Establecer
                      </button>
                    </div>
                  </div>

                  {userLlamaGafasImg && (
                    <button 
                      onClick={() => handleResetImage("llama_gafas")}
                      className="w-full flex items-center justify-center gap-1.5 py-1 text-[11px] font-bold text-red-500 hover:text-red-600 transition-colors"
                    >
                      <RefreshCw className="w-3.5 h-3.5 text-red-500" />
                      <span>Revertir a original</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Producto 12: Pedro Picapiedra */}
              <div className="bg-brand-bg/40 rounded-2xl p-4 border border-brand-pink/10 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold tracking-wider uppercase text-brand-pink">Producto 12</span>
                  <h3 className="font-bold text-brand-brown text-base mb-2">Pedro Picapiedra</h3>
                  
                  <div className="rounded-xl overflow-hidden aspect-[4/3] bg-brand-bg/80 relative mb-4 border border-brand-pink/10">
                    <img 
                      src={pedroPicapiedraCandidates[0]} 
                      alt="Miniatura Pedro Picapiedra" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200">
                      <span className="text-white text-xs font-bold">Vista Previa</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-brand-pink hover:bg-brand-pink/90 text-white text-xs font-bold rounded-xl shadow-xs transition-all duration-300 cursor-pointer">
                      <Upload className="w-3.5 h-3.5" />
                      <span>Subir Foto de Pedro</span>
                      <input 
                        type="file" 
                        accept="image/*" 
                        className="hidden" 
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) handleImageUpload("pedro_picapiedra", file);
                        }}
                      />
                    </label>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-brand-brown/50">O ingresar enlace de imagen:</span>
                    <div className="flex gap-1">
                      <input 
                        type="text" 
                        placeholder="https://..." 
                        value={pedroPicapiedraUrlInput}
                        onChange={(e) => setPedroPicapiedraUrlInput(e.target.value)}
                        className="flex-grow text-xs px-2.5 py-1.5 rounded-lg border border-brand-pink/20 bg-white text-brand-brown focus:outline-none focus:border-brand-pink"
                      />
                      <button 
                        onClick={() => {
                          handleUrlSubmit("pedro_picapiedra", pedroPicapiedraUrlInput);
                          setPedroPicapiedraUrlInput("");
                        }}
                        className="px-3 bg-brand-cyan text-brand-brown text-xs font-bold rounded-lg hover:brightness-95 active:scale-95 transition-all cursor-pointer"
                      >
                        Establecer
                      </button>
                    </div>
                  </div>

                  {userPedroPicapiedraImg && (
                    <button 
                      onClick={() => handleResetImage("pedro_picapiedra")}
                      className="w-full flex items-center justify-center gap-1.5 py-1 text-[11px] font-bold text-red-500 hover:text-red-600 transition-colors"
                    >
                      <RefreshCw className="w-3.5 h-3.5 text-red-500" />
                      <span>Revertir a original</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Producto 13: Patricio Estrella */}
              <div className="bg-brand-bg/40 rounded-2xl p-4 border border-brand-pink/10 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold tracking-wider uppercase text-brand-pink">Producto 13</span>
                  <h3 className="font-bold text-brand-brown text-base mb-2">Patricio Estrella</h3>
                  
                  <div className="rounded-xl overflow-hidden aspect-[4/3] bg-brand-bg/80 relative mb-4 border border-brand-pink/10">
                    <img 
                      src={patricioEstrellaCandidates[0]} 
                      alt="Miniatura Patricio Estrella" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200">
                      <span className="text-white text-xs font-bold">Vista Previa</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-brand-pink hover:bg-brand-pink/90 text-white text-xs font-bold rounded-xl shadow-xs transition-all duration-300 cursor-pointer">
                      <Upload className="w-3.5 h-3.5" />
                      <span>Subir Foto de Patricio</span>
                      <input 
                        type="file" 
                        accept="image/*" 
                        className="hidden" 
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) handleImageUpload("patricio_estrella", file);
                        }}
                      />
                    </label>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-brand-brown/50">O ingresar enlace de imagen:</span>
                    <div className="flex gap-1">
                      <input 
                        type="text" 
                        placeholder="https://..." 
                        value={patricioEstrellaUrlInput}
                        onChange={(e) => setPatricioEstrellaUrlInput(e.target.value)}
                        className="flex-grow text-xs px-2.5 py-1.5 rounded-lg border border-brand-pink/20 bg-white text-brand-brown focus:outline-none focus:border-brand-pink"
                      />
                      <button 
                        onClick={() => {
                          handleUrlSubmit("patricio_estrella", patricioEstrellaUrlInput);
                          setPatricioEstrellaUrlInput("");
                        }}
                        className="px-3 bg-brand-cyan text-brand-brown text-xs font-bold rounded-lg hover:brightness-95 active:scale-95 transition-all cursor-pointer"
                      >
                        Establecer
                      </button>
                    </div>
                  </div>

                  {userPatricioEstrellaImg && (
                    <button 
                      onClick={() => handleResetImage("patricio_estrella")}
                      className="w-full flex items-center justify-center gap-1.5 py-1 text-[11px] font-bold text-red-500 hover:text-red-600 transition-colors"
                    >
                      <RefreshCw className="w-3.5 h-3.5 text-red-500" />
                      <span>Revertir a original</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Producto 14: Boo - Monster Inc. */}
              <div className="bg-brand-bg/40 rounded-2xl p-4 border border-brand-pink/10 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold tracking-wider uppercase text-brand-pink">Producto 14</span>
                  <h3 className="font-bold text-brand-brown text-base mb-2">Boo - Monster Inc.</h3>
                  
                  <div className="rounded-xl overflow-hidden aspect-[4/3] bg-brand-bg/80 relative mb-4 border border-brand-pink/10">
                    <img 
                      src={booCandidates[0]} 
                      alt="Miniatura Boo" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200">
                      <span className="text-white text-xs font-bold">Vista Previa</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-brand-pink hover:bg-brand-pink/90 text-white text-xs font-bold rounded-xl shadow-xs transition-all duration-300 cursor-pointer">
                      <Upload className="w-3.5 h-3.5" />
                      <span>Subir Foto de Boo</span>
                      <input 
                        type="file" 
                        accept="image/*" 
                        className="hidden" 
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) handleImageUpload("boo", file);
                        }}
                      />
                    </label>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-brand-brown/50">O ingresar enlace de imagen:</span>
                    <div className="flex gap-1">
                      <input 
                        type="text" 
                        placeholder="https://..." 
                        value={booUrlInput}
                        onChange={(e) => setBooUrlInput(e.target.value)}
                        className="flex-grow text-xs px-2.5 py-1.5 rounded-lg border border-brand-pink/20 bg-white text-brand-brown focus:outline-none focus:border-brand-pink"
                      />
                      <button 
                        onClick={() => {
                          handleUrlSubmit("boo", booUrlInput);
                          setBooUrlInput("");
                        }}
                        className="px-3 bg-brand-cyan text-brand-brown text-xs font-bold rounded-lg hover:brightness-95 active:scale-95 transition-all cursor-pointer"
                      >
                        Establecer
                      </button>
                    </div>
                  </div>

                  {userBooImg && (
                    <button 
                      onClick={() => handleResetImage("boo")}
                      className="w-full flex items-center justify-center gap-1.5 py-1 text-[11px] font-bold text-red-500 hover:text-red-600 transition-colors"
                    >
                      <RefreshCw className="w-3.5 h-3.5 text-red-500" />
                      <span>Revertir a original</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Producto 15: Sullivan y Mike Wazowski */}
              <div className="bg-brand-bg/40 rounded-2xl p-4 border border-brand-pink/10 flex flex-col justify-between" id="admin-sullivan-mike">
                <div>
                  <span className="text-[10px] font-bold tracking-wider uppercase text-brand-pink">Producto 15</span>
                  <h3 className="font-bold text-brand-brown text-base mb-2">Sullivan y Mike Wazowski</h3>
                  
                  <div className="rounded-xl overflow-hidden aspect-[4/3] bg-brand-bg/80 relative mb-4 border border-brand-pink/10">
                    <img 
                      src={sullivanMikeCandidates[0]} 
                      alt="Miniatura Sullivan y Mike" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200">
                      <span className="text-white text-xs font-bold">Vista Previa</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-brand-pink hover:bg-brand-pink/90 text-white text-xs font-bold rounded-xl shadow-xs transition-all duration-300 cursor-pointer">
                      <Upload className="w-3.5 h-3.5" />
                      <span>Subir Foto de S&M</span>
                      <input 
                        type="file" 
                        accept="image/*" 
                        className="hidden" 
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) handleImageUpload("sullivan_mike", file);
                        }}
                      />
                    </label>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-brand-brown/50">O ingresar enlace de imagen:</span>
                    <div className="flex gap-1">
                      <input 
                        type="text" 
                        placeholder="https://..." 
                        value={sullivanMikeUrlInput}
                        onChange={(e) => setSullivanMikeUrlInput(e.target.value)}
                        className="flex-grow text-xs px-2.5 py-1.5 rounded-lg border border-brand-pink/20 bg-white text-brand-brown focus:outline-none focus:border-brand-pink"
                      />
                      <button 
                        onClick={() => {
                          handleUrlSubmit("sullivan_mike", sullivanMikeUrlInput);
                          setSullivanMikeUrlInput("");
                        }}
                        className="px-3 bg-brand-cyan text-brand-brown text-xs font-bold rounded-lg hover:brightness-95 active:scale-95 transition-all cursor-pointer"
                      >
                        Establecer
                      </button>
                    </div>
                  </div>

                  {userSullivanMikeImg && (
                    <button 
                      onClick={() => handleResetImage("sullivan_mike")}
                      className="w-full flex items-center justify-center gap-1.5 py-1 text-[11px] font-bold text-red-500 hover:text-red-600 transition-colors"
                    >
                      <RefreshCw className="w-3.5 h-3.5 text-red-500" />
                      <span>Revertir a original</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Producto 16: Snoopy Aviador */}
              <div className="bg-brand-bg/40 rounded-2xl p-4 border border-brand-pink/10 flex flex-col justify-between" id="admin-snoopy">
                <div>
                  <span className="text-[10px] font-bold tracking-wider uppercase text-brand-pink">Producto 16</span>
                  <h3 className="font-bold text-brand-brown text-base mb-2">Snoopy</h3>
                  
                  <div className="rounded-xl overflow-hidden aspect-[4/3] bg-brand-bg/80 relative mb-4 border border-brand-pink/10">
                    <img 
                      src={snoopyCandidates[0]} 
                      alt="Miniatura Snoopy Aviador" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200">
                      <span className="text-white text-xs font-bold">Vista Previa</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-brand-pink hover:bg-brand-pink/90 text-white text-xs font-bold rounded-xl shadow-xs transition-all duration-300 cursor-pointer">
                      <Upload className="w-3.5 h-3.5" />
                      <span>Subir Foto de Snoopy</span>
                      <input 
                        type="file" 
                        accept="image/*" 
                        className="hidden" 
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) handleImageUpload("snoopy", file);
                        }}
                      />
                    </label>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-brand-brown/50">O ingresar enlace de imagen:</span>
                    <div className="flex gap-1">
                      <input 
                        type="text" 
                        placeholder="https://..." 
                        value={snoopyUrlInput}
                        onChange={(e) => setSnoopyUrlInput(e.target.value)}
                        className="flex-grow text-xs px-2.5 py-1.5 rounded-lg border border-brand-pink/20 bg-white text-brand-brown focus:outline-none focus:border-brand-pink"
                      />
                      <button 
                        onClick={() => {
                          handleUrlSubmit("snoopy", snoopyUrlInput);
                          setSnoopyUrlInput("");
                        }}
                        className="px-3 bg-brand-cyan text-brand-brown text-xs font-bold rounded-lg hover:brightness-95 active:scale-95 transition-all cursor-pointer"
                      >
                        Establecer
                      </button>
                    </div>
                  </div>

                  {userSnoopyImg && (
                    <button 
                      onClick={() => handleResetImage("snoopy")}
                      className="w-full flex items-center justify-center gap-1.5 py-1 text-[11px] font-bold text-red-500 hover:text-red-600 transition-colors"
                    >
                      <RefreshCw className="w-3.5 h-3.5 text-red-500" />
                      <span>Revertir a original</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Producto 17: Grinch Adorno */}
              <div className="bg-brand-bg/40 rounded-2xl p-4 border border-brand-pink/10 flex flex-col justify-between" id="admin-grinch-orn">
                <div>
                  <span className="text-[10px] font-bold tracking-wider uppercase text-brand-pink">Producto 17</span>
                  <h3 className="font-bold text-brand-brown text-base mb-2">Grinch (Adorno)</h3>
                  
                  <div className="rounded-xl overflow-hidden aspect-[4/3] bg-brand-bg/80 relative mb-4 border border-brand-pink/10">
                    <img 
                      src={grinchOrnCandidates[0]} 
                      alt="Miniatura Grinch Adorno" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200">
                      <span className="text-white text-xs font-bold">Vista Previa</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-brand-pink hover:bg-brand-pink/90 text-white text-xs font-bold rounded-xl shadow-xs transition-all duration-300 cursor-pointer">
                      <Upload className="w-3.5 h-3.5" />
                      <span>Subir Foto de Grinch</span>
                      <input 
                        type="file" 
                        accept="image/*" 
                        className="hidden" 
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) handleImageUpload("grinch_orn", file);
                        }}
                      />
                    </label>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-brand-brown/50">O ingresar enlace de imagen:</span>
                    <div className="flex gap-1">
                      <input 
                        type="text" 
                        placeholder="https://..." 
                        value={grinchOrnUrlInput}
                        onChange={(e) => setGrinchOrnUrlInput(e.target.value)}
                        className="flex-grow text-xs px-2.5 py-1.5 rounded-lg border border-brand-pink/20 bg-white text-brand-brown focus:outline-none focus:border-brand-pink"
                      />
                      <button 
                        onClick={() => {
                          handleUrlSubmit("grinch_orn", grinchOrnUrlInput);
                          setGrinchOrnUrlInput("");
                        }}
                        className="px-3 bg-brand-cyan text-brand-brown text-xs font-bold rounded-lg hover:brightness-95 active:scale-95 transition-all cursor-pointer"
                      >
                        Establecer
                      </button>
                    </div>
                  </div>

                  {userGrinchOrnImg && (
                    <button 
                      onClick={() => handleResetImage("grinch_orn")}
                      className="w-full flex items-center justify-center gap-1.5 py-1 text-[11px] font-bold text-red-500 hover:text-red-600 transition-colors"
                    >
                      <RefreshCw className="w-3.5 h-3.5 text-red-500" />
                      <span>Revertir a original</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Configuración Especial: Fondo de la Página de Inicio */}
              <div className="bg-brand-pink/5 rounded-2xl p-4 border border-brand-pink/30 flex flex-col justify-between col-span-1">
                <div>
                  <span className="text-[10px] font-bold tracking-wider uppercase text-brand-pink">Especial / Inicio</span>
                  <h3 className="font-bold text-brand-brown text-base mb-2">Fondo del Inicio</h3>
                  
                  <div className="rounded-xl overflow-hidden aspect-[4/3] bg-brand-bg/80 relative mb-4 border border-brand-pink/15">
                    <img 
                      src={userHeroBg || homeBackground} 
                      alt="Miniatura Fondo de Inicio" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200">
                      <span className="text-white text-xs font-bold">Fondo Actual</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-brand-pink hover:bg-brand-pink/90 text-white text-xs font-bold rounded-xl shadow-xs transition-all duration-300 cursor-pointer">
                      <Upload className="w-3.5 h-3.5" />
                      <span>Subir Foto de Inicio</span>
                      <input 
                        type="file" 
                        accept="image/*" 
                        className="hidden" 
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) handleImageUpload("hero_bg", file);
                        }}
                      />
                    </label>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-brand-brown/50">O ingresar enlace de imagen:</span>
                    <div className="flex gap-1">
                      <input 
                        type="text" 
                        placeholder="https://..." 
                        value={heroBgUrlInput}
                        onChange={(e) => setHeroBgUrlInput(e.target.value)}
                        className="flex-grow text-xs px-2.5 py-1.5 rounded-lg border border-brand-pink/20 bg-white text-brand-brown focus:outline-none focus:border-brand-pink"
                      />
                      <button 
                        onClick={() => {
                          handleUrlSubmit("hero_bg", heroBgUrlInput);
                          setHeroBgUrlInput("");
                        }}
                        className="px-3 bg-brand-cyan text-brand-brown text-xs font-bold rounded-lg hover:brightness-95 active:scale-95 transition-all cursor-pointer"
                      >
                        Establecer
                      </button>
                    </div>
                  </div>

                  {userHeroBg && (
                    <button 
                      onClick={() => handleResetImage("hero_bg")}
                      className="w-full flex items-center justify-center gap-1.5 py-1 text-[11px] font-bold text-red-500 hover:text-red-600 transition-colors"
                    >
                      <RefreshCw className="w-3.5 h-3.5 text-red-500" />
                      <span>Revertir a original</span>
                    </button>
                  )}
                </div>
              </div>
            </div>

            <div className="rounded-2xl p-4 bg-brand-pink/5 text-brand-brown border border-brand-pink/15 flex items-start gap-2.5 text-xs">
              <Info className="w-4 h-4 text-brand-pink shrink-0 mt-0.5" />
              <span>
                <strong>Instrucciones para administración manual:</strong> Si tienes archivos físicos, puedes subirlos aquí al instante arrastrándolos o buscándolos con el botón &quot;Subir Foto o Llavero&quot;. También puedes escribir la ruta del archivo que copiaste al editor (como <code>/src/assets/images/gato_llavero_1779715868522.png</code>) o una URL de internet para cambiar el catálogo en tiempo real.
              </span>
            </div>
          </motion.div>
        )}

        {/* Panel de Métricas / Dashboard de Rendimiento de la Galería */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white/80 backdrop-blur-md rounded-3xl p-6 border border-brand-pink/20 shadow-sm max-w-4xl mx-auto mb-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          {/*********** Métrica 1: Visualizaciones ***********/}
          <div className="flex flex-col items-center justify-center space-y-1.5 border-r border-brand-pink/10 last:border-r-0">
            <div className="p-3 bg-brand-pink/10 rounded-2xl text-brand-pink">
              <Eye className="w-5 h-5" />
            </div>
            <span className="text-3xl font-bold font-serif text-brand-brown select-none">
              {views}
            </span>
            <span className="text-[11px] font-bold text-brand-brown/60 uppercase tracking-wider">
              Visualizaciones
            </span>
          </div>

          {/*********** Métrica 2: Reacciones / Me Gustas ***********/}
          <div className="flex flex-col items-center justify-center space-y-1.5 border-r border-brand-pink/10 last:border-r-0 md:border-r">
            <div className="p-3 bg-red-50 rounded-2xl text-red-400">
              <Heart className="w-5 h-5 fill-current animate-pulse text-red-500" />
            </div>
            <span className="text-3xl font-bold font-serif text-brand-brown select-none">
              {totalLikes}
            </span>
            <span className="text-[11px] font-bold text-brand-brown/60 uppercase tracking-wider">
              Reacciones (Me Gusta)
            </span>
          </div>

          {/*********** Métrica 3: Consultas / WhatsApp Clicks ***********/}
          <div className="flex flex-col items-center justify-center space-y-1.5 border-r border-brand-pink/10 last:border-r-0">
            <div className="p-3 bg-green-50 rounded-2xl text-green-500">
              <MessageCircle className="w-5 h-5" />
            </div>
            <span className="text-3xl font-bold font-serif text-brand-brown select-none">
              {totalClicks}
            </span>
            <span className="text-[11px] font-bold text-brand-brown/60 uppercase tracking-wider">
              Pedidos y Consultas
            </span>
          </div>

          {/*********** Métrica 4: Ratio de Interés ***********/}
          <div className="flex flex-col items-center justify-center space-y-1.5 last:border-r-0">
            <div className="p-3 bg-yellow-50 rounded-2xl text-yellow-600">
              <BarChart3 className="w-5 h-5" />
            </div>
            <span className="text-3xl font-bold font-serif text-brand-brown select-none">
              {conversionRate}%
            </span>
            <span className="text-[11px] font-bold text-brand-brown/60 uppercase tracking-wider">
              Intención de Compra
            </span>
          </div>
        </motion.div>

        {/* ==================== RANKING REAL DE POPULARIDAD ==================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gradient-to-br from-white to-brand-bg/20 rounded-3xl p-6 md:p-8 border border-brand-pink/20 shadow-md max-w-4xl mx-auto mb-16 text-left"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-brand-pink/10 pb-6 mb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-amber-100 rounded-2xl text-amber-600 shadow-xs animate-bounce-subtle">
                <Trophy className="w-6 h-6 text-amber-500 fill-current" />
              </div>
              <div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-brand-brown">
                  Ranking Real de <span className="text-brand-pink">Popularidad</span>
                </h2>
                <p className="text-sm text-brand-brown/70 mt-0.5">
                  Las obras favoritas de nuestra comunidad actualizadas en vivo. ¡Dale amor a tu preferido para subirlo en la lista!
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 self-start md:self-center bg-brand-pink/10 px-4 py-2 rounded-full text-xs font-bold text-brand-pink">
              <TrendingUp className="w-4 h-4 animate-pulse" />
              <span>Votación en Vivo</span>
            </div>
          </div>

          <div className="space-y-4">
            {popularityRanking.map((item, index) => {
              const isFirst = index === 0;
              const isSecond = index === 1;
              const isThird = index === 2;
              const hasLiked = hasLikedById(item.id);
              const percentage = Math.round((item.likes / maxLikes) * 100);

              return (
                <motion.div
                  layout
                  key={item.id}
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  className={`flex items-center justify-between gap-4 p-4 rounded-2xl border transition-all duration-300 ${
                    isFirst 
                      ? "bg-amber-50/60 border-amber-200/60 shadow-xs" 
                      : "bg-white/80 border-brand-pink/10 hover:border-brand-pink/30 hover:bg-white"
                  }`}
                >
                  <div className="flex items-center gap-3 md:gap-4 flex-grow min-w-0">
                    {/* Rank Indicator / Badge */}
                    <div className="flex-shrink-0 w-8 md:w-10 flex items-center justify-center">
                      {isFirst ? (
                        <span className="text-2xl md:text-3xl select-none" title="1er Lugar">🥇</span>
                      ) : isSecond ? (
                        <span className="text-2xl md:text-3xl select-none" title="2do Lugar">🥈</span>
                      ) : isThird ? (
                        <span className="text-2xl md:text-3xl select-none" title="3er Lugar">🥉</span>
                      ) : (
                        <span className="text-sm font-mono font-bold text-brand-brown/50 bg-brand-pink/5 w-7 h-7 rounded-full flex items-center justify-center border border-brand-pink/10">
                          #{index + 1}
                        </span>
                      )}
                    </div>

                    {/* Amigurumi Mini Circular Avatar */}
                    <div className="w-12 h-12 rounded-xl overflow-hidden bg-brand-bg relative flex-shrink-0 border border-brand-pink/10 shadow-inner">
                      <ImageWithFallback
                        candidates={item.candidates}
                        alt={`Miniatura ${item.name}`}
                        className="w-full h-full object-cover select-none"
                      />
                    </div>

                    {/* Work Info & Live Progress Bar */}
                    <div className="flex-grow min-w-0">
                      <div className="flex items-baseline gap-2 flex-wrap">
                        <h4 className="font-serif text-sm md:text-base font-bold text-brand-brown truncate">
                          {item.name}
                        </h4>
                        <span className="text-[10px] font-bold text-brand-pink bg-brand-pink/10 px-2 py-0.5 rounded-md uppercase tracking-wider">
                          {item.size}
                        </span>
                      </div>
                      
                      {/* Dynamic Voting Progress Bar */}
                      <div className="mt-2 w-full flex items-center gap-3">
                        <div className="flex-grow h-2 bg-brand-pink/5 rounded-full overflow-hidden border border-brand-pink/5">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${percentage}%` }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className={`h-full rounded-full ${
                              isFirst 
                                ? "bg-gradient-to-r from-amber-400 to-amber-500" 
                                : isSecond || isThird 
                                ? "bg-gradient-to-r from-brand-pink to-brand-cyan" 
                                : "bg-brand-pink/60"
                            }`}
                          />
                        </div>
                        <span className="text-[10px] md:text-xs font-mono font-bold text-brand-brown/50 flex-shrink-0 w-8 text-right">
                          {percentage}%
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Likes count & Interactive Upvote Button */}
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <div className="text-right hidden sm:block">
                      <div className="text-sm font-serif font-bold text-brand-brown flex items-center gap-1 justify-end">
                        <Heart className="w-3.5 h-3.5 text-red-500 fill-current shrink-0" />
                        <span>{item.likes}</span>
                      </div>
                      <span className="text-[9px] font-bold text-brand-brown/40 uppercase tracking-widest block">votos</span>
                    </div>

                    <button
                      onClick={() => handleLikeById(item.id)}
                      className={`p-2.5 md:p-3 rounded-xl border flex items-center gap-1.5 transition-all duration-300 cursor-pointer ${
                        hasLiked 
                          ? "bg-red-50 border-red-200 text-red-500 scale-105" 
                          : "bg-white border-brand-pink/10 hover:border-brand-pink/40 text-brand-pink hover:bg-brand-pink/5 active:scale-95"
                      }`}
                      aria-label={`Votar por ${item.name}`}
                    >
                      <Heart className={`w-4 h-4 transition-all duration-300 ${hasLiked ? "fill-current scale-110" : ""}`} />
                      <span className="text-xs font-bold leading-none sm:hidden">{item.likes}</span>
                      <span className="text-xs font-bold leading-none hidden sm:inline">
                        {hasLiked ? "Amado" : "Votar"}
                      </span>
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-2">
          {/* Tarjeta 1: Gato con Botas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(244, 143, 177, 0.15)" }}
            className="bg-white rounded-3xl border border-brand-pink/20 hover:border-brand-pink/45 shadow-md hover:shadow-xl overflow-hidden transition-all duration-300 flex flex-col h-full"
          >
            {/* Imagen del Amigurumi */}
            <div className="relative aspect-[4/3] overflow-hidden bg-brand-bg">
              <ImageWithFallback
                candidates={gatoCandidates}
                alt="Amigurumi Gato con botas"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover select-none"
              />
              <span className="absolute top-4 left-4 bg-brand-cyan/95 backdrop-blur-xs text-brand-brown text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                Edición Especial
              </span>

              {/* Botón de Reacción Interactivo */}
              <button
                onClick={handleLikeGato}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-white/95 backdrop-blur-xs shadow-md border border-brand-pink/10 hover:scale-110 active:scale-90 transition-all duration-300 cursor-pointer group"
                aria-label="Dar me gusta al Gato con Botas"
              >
                <Heart
                  className={`w-4 h-4 transition-all duration-300 ${
                    hasLikedGato ? "text-red-500 fill-current scale-110" : "text-brand-pink group-hover:text-red-500"
                  }`}
                />
              </button>
            </div>

            {/* Detalles del Producto */}
            <div className="p-6 flex-grow flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-2xl font-bold text-brand-brown">
                    Gato con botas
                  </h3>
                  <div className="flex items-center gap-1 text-xs font-bold text-brand-brown/70 bg-brand-pink/10 px-2 py-0.5 rounded-md">
                    <Heart className="w-3.5 h-3.5 text-red-500 fill-current" />
                    <span>{gatoLikes}</span>
                  </div>
                </div>
                
                <p className="text-sm text-brand-brown/70 leading-relaxed">
                  Hermoso amigurumi tejido totalmente a mano con hilos premium. Incluye su icónico sombrero de ala ancha con pluma, capa y elegantes botitas. Un compañero de aventuras inolvidable.
                </p>

                {gatoClicks > 0 && (
                  <div className="flex items-center gap-1.5 text-xs text-brand-brown/50">
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>{gatoClicks} clientes han solicitado detalles de esta obra</span>
                  </div>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-brand-pink/10">
                <a
                  href={gatoWhatsappUrl}
                  onClick={handleTrackGatoClick}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-2 bg-brand-pink hover:bg-brand-pink/90 text-white font-bold py-3 px-4 rounded-full shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.557-5.343 11.897-11.953 11.897-2.006-.002-3.978-.507-5.742-1.466L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.852.002-2.632-1.023-5.105-2.887-6.97-1.864-1.865-4.343-2.89-6.978-2.892-5.441 0-9.865 4.421-9.869 9.852-.001 1.748.461 3.454 1.337 4.97L1.87 21.082l4.777-1.252a9.78 9.78 0 00.001.002z" />
                  </svg>
                  <span>Consultar por WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Tarjeta 2: El Grinch */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(244, 143, 177, 0.15)" }}
            className="bg-white rounded-3xl border border-brand-pink/20 hover:border-brand-pink/45 shadow-md hover:shadow-xl overflow-hidden transition-all duration-300 flex flex-col h-full"
          >
            {/* Imagen del Amigurumi */}
            <div className="relative aspect-[4/3] overflow-hidden bg-brand-bg">
              <ImageWithFallback
                candidates={grinchCandidates}
                alt="Amigurumi Grinch"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover select-none"
              />
              <span className="absolute top-4 left-4 bg-brand-cyan/95 backdrop-blur-xs text-brand-brown text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                Navideño
              </span>

              {/* Botón de Reacción Interactivo */}
              <button
                onClick={handleLikeGrinch}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-white/95 backdrop-blur-xs shadow-md border border-brand-pink/10 hover:scale-110 active:scale-90 transition-all duration-300 cursor-pointer group"
                aria-label="Dar me gusta al Grinch"
              >
                <Heart
                  className={`w-4 h-4 transition-all duration-300 ${
                    hasLikedGrinch ? "text-red-500 fill-current scale-110" : "text-brand-pink group-hover:text-red-500"
                  }`}
                />
              </button>
            </div>

            {/* Detalles del Producto */}
            <div className="p-6 flex-grow flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-2xl font-bold text-brand-brown">
                    El Grinch
                  </h3>
                  <div className="flex items-center gap-1 text-xs font-bold text-brand-brown/70 bg-brand-pink/10 px-2 py-0.5 rounded-md">
                    <Heart className="w-3.5 h-3.5 text-red-500 fill-current" />
                    <span>{grinchLikes}</span>
                  </div>
                </div>
                
                <p className="text-sm text-brand-brown/70 leading-relaxed">
                  El carismático e icónico Grinch amigurumi tejido totalmente a mano en un vibrante tono verde lima, luciendo sus expresivos ojos celestes y una abrigadora bufanda bicolor roja y negra tejida a crochet. Un compañero de colección lleno de picardía y espíritu travieso, perfecto para dar un toque único de fantasía a tu hogar.
                </p>

                {grinchClicks > 0 && (
                  <div className="flex items-center gap-1.5 text-xs text-brand-brown/50">
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>{grinchClicks} clientes han solicitado detalles de esta obra</span>
                  </div>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-brand-pink/10">
                <a
                  href={grinchWhatsappUrl}
                  onClick={handleTrackGrinchClick}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-2 bg-brand-pink hover:bg-brand-pink/90 text-white font-bold py-3 px-4 rounded-full shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.557-5.343 11.897-11.953 11.897-2.006-.002-3.978-.507-5.742-1.466L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.852.002-2.632-1.023-5.105-2.887-6.97-1.864-1.865-4.343-2.89-6.978-2.892-5.441 0-9.865 4.421-9.869 9.852-.001 1.748.461 3.454 1.337 4.97L1.87 21.082l4.777-1.252a9.78 9.78 0 00.001.002z" />
                  </svg>
                  <span>Consultar por WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Tarjeta 3: Gato con Botas Llavero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(244, 143, 177, 0.15)" }}
            className="bg-white rounded-3xl border border-brand-pink/20 hover:border-brand-pink/45 shadow-md hover:shadow-xl overflow-hidden transition-all duration-300 flex flex-col h-full"
          >
            {/* Imagen del Amigurumi */}
            <div className="relative aspect-[4/3] overflow-hidden bg-brand-bg">
              <ImageWithFallback
                candidates={gatoLlaveroCandidates}
                alt="Amigurumi Gato con botas"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover select-none"
              />
              <span className="absolute top-4 left-4 bg-brand-pink text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                Llavero / Accesorio
              </span>

              {/* Botón de Reacción Interactivo */}
              <button
                onClick={handleLikeGatoLlavero}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-white/95 backdrop-blur-xs shadow-md border border-brand-pink/10 hover:scale-110 active:scale-90 transition-all duration-300 cursor-pointer group"
                aria-label="Dar me gusta al Gato con botas"
              >
                <Heart
                  className={`w-4 h-4 transition-all duration-300 ${
                    hasLikedGatoLlavero ? "text-red-500 fill-current scale-110" : "text-brand-pink group-hover:text-red-500"
                  }`}
                />
              </button>
            </div>

            {/* Detalles del Producto */}
            <div className="p-6 flex-grow flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-2xl font-bold text-brand-brown">
                    Gato con botas
                  </h3>
                  <div className="flex items-center gap-1 text-xs font-bold text-brand-brown/70 bg-brand-pink/10 px-2 py-0.5 rounded-md">
                    <Heart className="w-3.5 h-3.5 text-red-500 fill-current" />
                    <span>{gatoLlaveroLikes}</span>
                  </div>
                </div>
                
                <p className="text-sm text-brand-brown/70 leading-relaxed">
                  Encantador amigurumi de Gato con botas en tamaño miniatura. ¡Es el compañero perfecto para llevar a donde quieras! Puede usarse como llavero, decorar una maleta o llevarlo en el carro como una divertida compañía. Tejido minuciosamente a mano.
                </p>

                {gatoLlaveroClicks > 0 && (
                  <div className="flex items-center gap-1.5 text-xs text-brand-brown/50">
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>{gatoLlaveroClicks} clientes han solicitado detalles de esta obra</span>
                  </div>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-brand-pink/10">
                <a
                  href={gatoLlaveroWhatsappUrl}
                  onClick={handleTrackGatoLlaveroClick}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-2 bg-brand-pink hover:bg-brand-pink/90 text-white font-bold py-3 px-4 rounded-full shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.557-5.343 11.897-11.953 11.897-2.006-.002-3.978-.507-5.742-1.466L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.852.002-2.632-1.023-5.105-2.887-6.97-1.864-1.865-4.343-2.89-6.978-2.892-5.441 0-9.865 4.421-9.869 9.852-.001 1.748.461 3.454 1.337 4.97L1.87 21.082l4.777-1.252a9.78 9.78 0 00.001.002z" />
                  </svg>
                  <span>Consultar por WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Tarjeta 4: Mafalda */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(244, 143, 177, 0.15)" }}
            className="bg-white rounded-3xl border border-brand-pink/20 hover:border-brand-pink/45 shadow-md hover:shadow-xl overflow-hidden transition-all duration-300 flex flex-col h-full"
          >
            {/* Imagen del Amigurumi */}
            <div className="relative aspect-[4/3] overflow-hidden bg-brand-bg">
              <ImageWithFallback
                candidates={mafaldaCandidates}
                alt="Amigurumi Mafalda"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover select-none"
              />
              <span className="absolute top-4 left-4 bg-brand-pink text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                Llavero / Accesorio
              </span>

              {/* Botón de Reacción Interactivo */}
              <button
                onClick={handleLikeMafalda}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-white/95 backdrop-blur-xs shadow-md border border-brand-pink/10 hover:scale-110 active:scale-90 transition-all duration-300 cursor-pointer group"
                aria-label="Dar me gusta a Mafalda"
              >
                <Heart
                  className={`w-4 h-4 transition-all duration-300 ${
                    hasLikedMafalda ? "text-red-500 fill-current scale-110" : "text-brand-pink group-hover:text-red-500"
                  }`}
                />
              </button>
            </div>

            {/* Detalles del Producto */}
            <div className="p-6 flex-grow flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-2xl font-bold text-brand-brown">
                    Mafalda
                  </h3>
                  <div className="flex items-center gap-1 text-xs font-bold text-brand-brown/70 bg-brand-pink/10 px-2 py-0.5 rounded-md">
                    <Heart className="w-3.5 h-3.5 text-red-500 fill-current" />
                    <span>{mafaldaLikes}</span>
                  </div>
                </div>
                
                <p className="text-sm text-brand-brown/70 leading-relaxed">
                  Precioso amigurumi de la icónica Mafalda vestida con su clásico vestido rojo y lazo. Totalmente tejida a mano con hilos hipoalergénicos de la más alta calidad y un acabado impecable. Un regalo cargado de nostalgia y encanto intelectual.
                </p>

                {mafaldaClicks > 0 && (
                  <div className="flex items-center gap-1.5 text-xs text-brand-brown/50">
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>{mafaldaClicks} clientes han solicitado detalles de esta obra</span>
                  </div>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-brand-pink/10">
                <a
                  href={mafaldaWhatsappUrl}
                  onClick={handleTrackMafaldaClick}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-2 bg-brand-pink hover:bg-brand-pink/90 text-white font-bold py-3 px-4 rounded-full shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.557-5.343 11.897-11.953 11.897-2.006-.002-3.978-.507-5.742-1.466L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.852.002-2.632-1.023-5.105-2.887-6.97-1.864-1.865-4.343-2.89-6.978-2.892-5.441 0-9.865 4.421-9.869 9.852-.001 1.748.461 3.454 1.337 4.97L1.87 21.082l4.777-1.252a9.78 9.78 0 00.001.002z" />
                  </svg>
                  <span>Consultar por WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Tarjeta 5: Forki */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(244, 143, 177, 0.15)" }}
            className="bg-white rounded-3xl border border-brand-pink/20 hover:border-brand-pink/45 shadow-md hover:shadow-xl overflow-hidden transition-all duration-300 flex flex-col h-full"
          >
            {/* Imagen del Amigurumi */}
            <div className="relative aspect-[4/3] overflow-hidden bg-brand-bg">
              <ImageWithFallback
                candidates={forkyCandidates}
                alt="Amigurumi Forki"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover select-none"
              />
              <span className="absolute top-4 left-4 bg-brand-pink text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                Miniatura / Adorno
              </span>

              {/* Botón de Reacción Interactivo */}
              <button
                onClick={handleLikeForky}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-white/95 backdrop-blur-xs shadow-md border border-brand-pink/10 hover:scale-110 active:scale-90 transition-all duration-300 cursor-pointer group"
                aria-label="Dar me gusta a Forki"
              >
                <Heart
                  className={`w-4 h-4 transition-all duration-300 ${
                    hasLikedForky ? "text-red-500 fill-current scale-110" : "text-brand-pink group-hover:text-red-500"
                  }`}
                />
              </button>
            </div>

            {/* Detalles del Producto */}
            <div className="p-6 flex-grow flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-2xl font-bold text-brand-brown">
                    Forki
                  </h3>
                  <div className="flex items-center gap-1 text-xs font-bold text-brand-brown/70 bg-brand-pink/10 px-2 py-0.5 rounded-md">
                    <Heart className="w-3.5 h-3.5 text-red-500 fill-current" />
                    <span>{forkyLikes}</span>
                  </div>
                </div>
                
                <p className="text-sm text-brand-brown/70 leading-relaxed">
                  Divertido y amigable amigurumi de Forki, tejido con un detalle y expresión inigualables. Con sus ojos saltones desparejados, su característica unibrow roja y sus bracitos flexibles. Ideal para decorar tu escritorio o regalar sonrisas.
                </p>

                {forkyClicks > 0 && (
                  <div className="flex items-center gap-1.5 text-xs text-brand-brown/50">
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>{forkyClicks} clientes han solicitado detalles de esta obra</span>
                  </div>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-brand-pink/10">
                <a
                  href={forkyWhatsappUrl}
                  onClick={handleTrackForkyClick}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-2 bg-brand-pink hover:bg-brand-pink/90 text-white font-bold py-3 px-4 rounded-full shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.557-5.343 11.897-11.953 11.897-2.006-.002-3.978-.507-5.742-1.466L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.852.002-2.632-1.023-5.105-2.887-6.97-1.864-1.865-4.343-2.89-6.978-2.892-5.441 0-9.865 4.421-9.869 9.852-.001 1.748.461 3.454 1.337 4.97L1.87 21.082l4.777-1.252a9.78 9.78 0 00.001.002z" />
                  </svg>
                  <span>Consultar por WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Tarjeta 6: Harry Potter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(244, 143, 177, 0.15)" }}
            className="bg-white rounded-3xl border border-brand-pink/20 hover:border-brand-pink/45 shadow-md hover:shadow-xl overflow-hidden transition-all duration-300 flex flex-col h-full"
          >
            {/* Imagen del Amigurumi */}
            <div className="relative aspect-[4/3] overflow-hidden bg-brand-bg">
              <ImageWithFallback
                candidates={harryPotterCandidates}
                alt="Amigurumi Harry Potter"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover select-none"
              />
              <span className="absolute top-4 left-4 bg-brand-pink text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                Edición de Colección
              </span>

              {/* Botón de Reacción Interactivo */}
              <button
                onClick={handleLikeHarryPotter}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-white/95 backdrop-blur-xs shadow-md border border-brand-pink/10 hover:scale-110 active:scale-90 transition-all duration-300 cursor-pointer group"
                aria-label="Dar me gusta a Harry Potter"
              >
                <Heart
                  className={`w-4 h-4 transition-all duration-300 ${
                    hasLikedHarryPotter ? "text-red-500 fill-current scale-110" : "text-brand-pink group-hover:text-red-500"
                  }`}
                />
              </button>
            </div>

            {/* Detalles del Producto */}
            <div className="p-6 flex-grow flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-2xl font-bold text-brand-brown">
                    Harry Potter
                  </h3>
                  <div className="flex items-center gap-1 text-xs font-bold text-brand-brown/70 bg-brand-pink/10 px-2 py-0.5 rounded-md">
                    <Heart className="w-3.5 h-3.5 text-red-500 fill-current" />
                    <span>{harryPotterLikes}</span>
                  </div>
                </div>
                
                <p className="text-sm text-brand-brown/70 leading-relaxed">
                  El joven mago más famoso hecho magia tejida. Recreado meticulosamente a crochet con su característica bufanda de Gryffindor dorada y carmesí, sus tiernos anteojos redondos bordados y su inolvidable cicatriz de rayo. Una obra de arte imperdible para amantes de la fantasía.
                </p>

                {harryPotterClicks > 0 && (
                  <div className="flex items-center gap-1.5 text-xs text-brand-brown/50">
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>{harryPotterClicks} clientes han solicitado detalles de esta obra</span>
                  </div>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-brand-pink/10">
                <a
                  href={harryPotterWhatsappUrl}
                  onClick={handleTrackHarryPotterClick}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-2 bg-brand-pink hover:bg-brand-pink/90 text-white font-bold py-3 px-4 rounded-full shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.557-5.343 11.897-11.953 11.897-2.006-.002-3.978-.507-5.742-1.466L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.852.002-2.632-1.023-5.105-2.887-6.97-1.864-1.865-4.343-2.89-6.978-2.892-5.441 0-9.865 4.421-9.869 9.852-.001 1.748.461 3.454 1.337 4.97L1.87 21.082l4.777-1.252a9.78 9.78 0 00.001.002z" />
                  </svg>
                  <span>Consultar por WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Tarjeta 7: Chapulín Colorado */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(244, 143, 177, 0.15)" }}
            className="bg-white rounded-3xl border border-brand-pink/20 hover:border-brand-pink/45 shadow-md hover:shadow-xl overflow-hidden transition-all duration-300 flex flex-col h-full"
          >
            {/* Imagen del Amigurumi */}
            <div className="relative aspect-[4/3] overflow-hidden bg-brand-bg">
              <ImageWithFallback
                candidates={chapulinCandidates}
                alt="Amigurumi Chapulín Colorado"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover select-none"
              />
              <span className="absolute top-4 left-4 bg-brand-pink text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                Edición Especial
              </span>

              {/* Botón de Reacción Interactivo */}
              <button
                onClick={handleLikeChapulin}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-white/95 backdrop-blur-xs shadow-md border border-brand-pink/10 hover:scale-110 active:scale-90 transition-all duration-300 cursor-pointer group"
                aria-label="Dar me gusta a Chapulín Colorado"
              >
                <Heart
                  className={`w-4 h-4 transition-all duration-300 ${
                    hasLikedChapulin ? "text-red-500 fill-current scale-110" : "text-brand-pink group-hover:text-red-500"
                  }`}
                />
              </button>
            </div>

            {/* Detalles del Producto */}
            <div className="p-6 flex-grow flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-2xl font-bold text-brand-brown">
                    Chapulín Colorado
                  </h3>
                  <div className="flex items-center gap-1 text-xs font-bold text-brand-brown/70 bg-brand-pink/10 px-2 py-0.5 rounded-md">
                    <Heart className="w-3.5 h-3.5 text-red-500 fill-current" />
                    <span>{chapulinLikes}</span>
                  </div>
                </div>
                
                <p className="text-sm text-brand-brown/70 leading-relaxed">
                  El héroe de corazón noble más tierno y divertido de la televisión recreado en el arte de crochet. Con sus antenitas de vinil, su traje rojo vibrante con el corazón de oro y las emblemáticas letras &quot;CH&quot; bordadas de manera impecable. ¡No contaban con su astucia!
                </p>

                {chapulinClicks > 0 && (
                  <div className="flex items-center gap-1.5 text-xs text-brand-brown/50">
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>{chapulinClicks} clientes han solicitado detalles de esta obra</span>
                  </div>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-brand-pink/10">
                <a
                  href={chapulinWhatsappUrl}
                  onClick={handleTrackChapulinClick}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-2 bg-brand-pink hover:bg-brand-pink/90 text-white font-bold py-3 px-4 rounded-full shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.557-5.343 11.897-11.953 11.897-2.006-.002-3.978-.507-5.742-1.466L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.852.002-2.632-1.023-5.105-2.887-6.97-1.864-1.865-4.343-2.89-6.978-2.892-5.441 0-9.865 4.421-9.869 9.852-.001 1.748.461 3.454 1.337 4.97L1.87 21.082l4.777-1.252a9.78 9.78 0 00.001.002z" />
                  </svg>
                  <span>Consultar por WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Tarjeta 8: Perry el ornitorrinco */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.7 }}
            whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(244, 143, 177, 0.15)" }}
            className="bg-white rounded-3xl border border-brand-pink/20 hover:border-brand-pink/45 shadow-md hover:shadow-xl overflow-hidden transition-all duration-300 flex flex-col h-full"
          >
            {/* Imagen del Amigurumi */}
            <div className="relative aspect-[4/3] overflow-hidden bg-brand-bg">
              <ImageWithFallback
                candidates={perryCandidates}
                alt="Amigurumi Perry el ornitorrinco"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover select-none"
              />
              <span className="absolute top-4 left-4 bg-brand-pink text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                Tamaño Llavero
              </span>

              {/* Botón de Reacción Interactivo */}
              <button
                onClick={handleLikePerry}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-white/95 backdrop-blur-xs shadow-md border border-brand-pink/10 hover:scale-110 active:scale-90 transition-all duration-300 cursor-pointer group"
                aria-label="Dar me gusta a Perry el ornitorrinco"
              >
                <Heart
                  className={`w-4 h-4 transition-all duration-300 ${
                    hasLikedPerry ? "text-red-500 fill-current scale-110" : "text-brand-pink group-hover:text-red-500"
                  }`}
                />
              </button>
            </div>

            {/* Detalles del Producto */}
            <div className="p-6 flex-grow flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-2xl font-bold text-brand-brown">
                    Perry el ornitorrinco
                  </h3>
                  <div className="flex items-center gap-1 text-xs font-bold text-brand-brown/70 bg-brand-pink/10 px-2 py-0.5 rounded-md">
                    <Heart className="w-3.5 h-3.5 text-red-500 fill-current" />
                    <span>{perryLikes}</span>
                  </div>
                </div>
                
                <p className="text-sm text-brand-brown/70 leading-relaxed">
                  El simpático ornitorrinco detective de la televisión recreado en una tierna versión tejida a mano tamaño llavero. Con su característico color turquesa, su piquito amarillo, su cola acolchada y su emblemático sombrerito canela de agente secreto. ¡Un compañero perfecto para llevar tus llaves con mucha astucia!
                </p>

                {perryClicks > 0 && (
                  <div className="flex items-center gap-1.5 text-xs text-brand-brown/50">
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>{perryClicks} clientes han solicitado detalles de esta obra</span>
                  </div>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-brand-pink/10">
                <a
                  href={perryWhatsappUrl}
                  onClick={handleTrackPerryClick}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-2 bg-brand-pink hover:bg-brand-pink/90 text-white font-bold py-3 px-4 rounded-full shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.557-5.343 11.897-11.953 11.897-2.006-.002-3.978-.507-5.742-1.466L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.852.002-2.632-1.023-5.105-2.887-6.97-1.864-1.865-4.343-2.89-6.978-2.892-5.441 0-9.865 4.421-9.869 9.852-.001 1.748.461 3.454 1.337 4.97L1.87 21.082l4.777-1.252a9.78 9.78 0 00.001.002z" />
                  </svg>
                  <span>Consultar por WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Tarjeta 9: Mickey Mouse */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.8 }}
            whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(244, 143, 177, 0.15)" }}
            className="bg-white rounded-3xl border border-brand-pink/20 hover:border-brand-pink/45 shadow-md hover:shadow-xl overflow-hidden transition-all duration-300 flex flex-col h-full"
          >
            {/* Imagen del Amigurumi */}
            <div className="relative aspect-[4/3] overflow-hidden bg-brand-bg">
              <ImageWithFallback
                candidates={mickeyMinnieCandidates}
                alt="Amigurumi Mickey Mouse"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover select-none"
              />
              <span className="absolute top-4 left-4 bg-brand-pink text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                Llavero / Carro / Maleta
              </span>

              {/* Botón de Reacción Interactivo */}
              <button
                onClick={handleLikeMickeyMinnie}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-white/95 backdrop-blur-xs shadow-md border border-brand-pink/10 hover:scale-110 active:scale-90 transition-all duration-300 cursor-pointer group"
                aria-label="Dar me gusta a Mickey Mouse"
              >
                <Heart
                  className={`w-4 h-4 transition-all duration-300 ${
                    hasLikedMickeyMinnie ? "text-red-500 fill-current scale-110" : "text-brand-pink group-hover:text-red-500"
                  }`}
                />
              </button>
            </div>

            {/* Detalles del Producto */}
            <div className="p-6 flex-grow flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-2xl font-bold text-brand-brown">
                    Mickey Mouse
                  </h3>
                  <div className="flex items-center gap-1 text-xs font-bold text-brand-brown/70 bg-brand-pink/10 px-2 py-0.5 rounded-md">
                    <Heart className="w-3.5 h-3.5 text-red-500 fill-current" />
                    <span>{mickeyMinnieLikes}</span>
                  </div>
                </div>
                
                <p className="text-sm text-brand-brown/70 leading-relaxed">
                  El tierno y carismático Mickey Mouse, el ratón más entrañable de la historia, recreado con delicados tejidos a mano y detalles llenos de amor. Diseñado en un tamaño compacto e ideal, es perfecto para usar como llavero, decorar con un toque divertido tu maleta favorita, o llevar de acompañamiento en tu carro. ¡Un clásico indispensable lleno de nostalgia y alegría!
                </p>

                {mickeyMinnieClicks > 0 && (
                  <div className="flex items-center gap-1.5 text-xs text-brand-brown/50">
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>{mickeyMinnieClicks} clientes han solicitado detalles de esta obra</span>
                  </div>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-brand-pink/10">
                <a
                  href={mickeyMinnieWhatsappUrl}
                  onClick={handleTrackMickeyMinnieClick}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-2 bg-brand-pink hover:bg-brand-pink/90 text-white font-bold py-3 px-4 rounded-full shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.557-5.343 11.897-11.953 11.897-2.006-.002-3.978-.507-5.742-1.466L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.852.002-2.632-1.023-5.105-2.887-6.97-1.864-1.865-4.343-2.89-6.978-2.892-5.441 0-9.865 4.421-9.869 9.852-.001 1.748.461 3.454 1.337 4.97L1.87 21.082l4.777-1.252a9.78 9.78 0 00.001.002z" />
                  </svg>
                  <span>Consultar por WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Tarjeta 10: Minnie Mouse */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.9 }}
            whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(244, 143, 177, 0.15)" }}
            className="bg-white rounded-3xl border border-brand-pink/20 hover:border-brand-pink/45 shadow-md hover:shadow-xl overflow-hidden transition-all duration-300 flex flex-col h-full"
          >
            {/* Imagen del Amigurumi */}
            <div className="relative aspect-[4/3] overflow-hidden bg-brand-bg">
              <ImageWithFallback
                candidates={minnieCandidates}
                alt="Amigurumi Minnie Mouse"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover select-none"
              />
              <span className="absolute top-4 left-4 bg-brand-pink text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                Llavero / Accesorio
              </span>

              {/* Botón de Reacción Interactivo */}
              <button
                onClick={handleLikeMinnie}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-white/95 backdrop-blur-xs shadow-md border border-brand-pink/10 hover:scale-110 active:scale-90 transition-all duration-300 cursor-pointer group"
                aria-label="Dar me gusta a Minnie Mouse"
              >
                <Heart
                  className={`w-4 h-4 transition-all duration-300 ${
                    hasLikedMinnie ? "text-red-500 fill-current scale-110" : "text-brand-pink group-hover:text-red-500"
                  }`}
                />
              </button>
            </div>

            {/* Detalles del Producto */}
            <div className="p-6 flex-grow flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-2xl font-bold text-brand-brown">
                    Minnie Mouse
                  </h3>
                  <div className="flex items-center gap-1 text-xs font-bold text-brand-brown/70 bg-brand-pink/10 px-2 py-0.5 rounded-md">
                    <Heart className="w-3.5 h-3.5 text-red-500 fill-current" />
                    <span>{minnieLikes}</span>
                  </div>
                </div>
                
                <p className="text-sm text-brand-brown/70 leading-relaxed">
                  La encantadora y coqueta Minnie Mouse de Disney, recreada con hilo de alta calidad en un tierno diseño amigurumi. Su tamaño compacto y versátil hace que sea ideal para llevar como un hermoso llavero, usarla para decorar de forma divertida tu maleta, o colocarla en el carro para dar un toque especial a cada viaje.
                </p>

                {minnieClicks > 0 && (
                  <div className="flex items-center gap-1.5 text-xs text-brand-brown/50">
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>{minnieClicks} clientes han solicitado detalles de esta obra</span>
                  </div>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-brand-pink/10">
                <a
                  href={minnieWhatsappUrl}
                  onClick={handleTrackMinnieClick}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-2 bg-brand-pink hover:bg-brand-pink/90 text-white font-bold py-3 px-4 rounded-full shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.557-5.343 11.897-11.953 11.897-2.006-.002-3.978-.507-5.742-1.466L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.852.002-2.632-1.023-5.105-2.887-6.97-1.864-1.865-4.343-2.89-6.978-2.892-5.441 0-9.865 4.421-9.869 9.852-.001 1.748.461 3.454 1.337 4.97L1.87 21.082l4.777-1.252a9.78 9.78 0 00.001.002z" />
                  </svg>
                  <span>Consultar por WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Tarjeta 11: Llama con gafas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.95 }}
            whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(244, 143, 177, 0.15)" }}
            className="bg-white rounded-3xl border border-brand-pink/20 hover:border-brand-pink/45 shadow-md hover:shadow-xl overflow-hidden transition-all duration-300 flex flex-col h-full"
          >
            {/* Imagen del Amigurumi */}
            <div className="relative aspect-[4/3] overflow-hidden bg-brand-bg">
              <ImageWithFallback
                candidates={llamaGafasCandidates}
                alt="Amigurumi Llama con gafas"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover select-none"
              />
              <span className="absolute top-4 left-4 bg-brand-pink text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                Llavero / Accesorio
              </span>

              {/* Botón de Reacción Interactivo */}
              <button
                onClick={handleLikeLlamaGafas}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-white/95 backdrop-blur-xs shadow-md border border-brand-pink/10 hover:scale-110 active:scale-90 transition-all duration-300 cursor-pointer group"
                aria-label="Dar me gusta a Llama con gafas"
              >
                <Heart
                  className={`w-4 h-4 transition-all duration-300 ${
                    hasLikedLlamaGafas ? "text-red-500 fill-current scale-110" : "text-brand-pink group-hover:text-red-500"
                  }`}
                />
              </button>
            </div>

            {/* Detalles del Producto */}
            <div className="p-6 flex-grow flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-2xl font-bold text-brand-brown">
                    Llama con gafas
                  </h3>
                  <div className="flex items-center gap-1 text-xs font-bold text-brand-brown/70 bg-brand-pink/10 px-2 py-0.5 rounded-md">
                    <Heart className="w-3.5 h-3.5 text-red-500 fill-current" />
                    <span>{llamaGafasLikes}</span>
                  </div>
                </div>
                
                <p className="text-sm text-brand-brown/70 leading-relaxed">
                  Una simpática y original llama amigurumi tejida a crochet con detalles espectaculares. Incluye unas adorables gafas circulares color rosa y una bufanda morada súper abrigadora. Hecha cuidadosamente a mano con hilos premium, ideal para acompañarte en tu día a día, colgarla en tu mochila, llavero, o decorar tu espacio favorito con estilo único.
                </p>

                {llamaGafasClicks > 0 && (
                  <div className="flex items-center gap-1.5 text-xs text-brand-brown/50">
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>{llamaGafasClicks} clientes han solicitado detalles de esta obra</span>
                  </div>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-brand-pink/10">
                <a
                  href={llamaGafasWhatsappUrl}
                  onClick={handleTrackLlamaGafasClick}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-2 bg-brand-pink hover:bg-brand-pink/90 text-white font-bold py-3 px-4 rounded-full shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.557-5.343 11.897-11.953 11.897-2.006-.002-3.978-.507-5.742-1.466L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.852.002-2.632-1.023-5.105-2.887-6.97-1.864-1.865-4.343-2.89-6.978-2.892-5.441 0-9.865 4.421-9.869 9.852-.001 1.748.461 3.454 1.337 4.97L1.87 21.082l4.777-1.252a9.78 9.78 0 00.001.002z" />
                  </svg>
                  <span>Consultar por WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Tarjeta 12: Pedro Picapiedra */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.0 }}
            whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(244, 143, 177, 0.15)" }}
            className="bg-white rounded-3xl border border-brand-pink/20 hover:border-brand-pink/45 shadow-md hover:shadow-xl overflow-hidden transition-all duration-300 flex flex-col h-full"
          >
            {/* Imagen del Amigurumi */}
            <div className="relative aspect-[4/3] overflow-hidden bg-brand-bg">
              <ImageWithFallback
                candidates={pedroPicapiedraCandidates}
                alt="Amigurumi Pedro Picapiedra"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover select-none"
              />
              <span className="absolute top-4 left-4 bg-brand-pink text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                Mediano
              </span>

              {/* Botón de Reacción Interactivo */}
              <button
                onClick={handleLikePedroPicapiedra}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-white/95 backdrop-blur-xs shadow-md border border-brand-pink/10 hover:scale-110 active:scale-90 transition-all duration-300 cursor-pointer group"
                aria-label="Dar me gusta a Pedro Picapiedra"
              >
                <Heart
                  className={`w-4 h-4 transition-all duration-300 ${
                    hasLikedPedroPicapiedra ? "text-red-500 fill-current scale-110" : "text-brand-pink group-hover:text-red-500"
                  }`}
                />
              </button>
            </div>

            {/* Detalles del Producto */}
            <div className="p-6 flex-grow flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-2xl font-bold text-brand-brown">
                    Pedro Picapiedra
                  </h3>
                  <div className="flex items-center gap-1 text-xs font-bold text-brand-brown/70 bg-brand-pink/10 px-2 py-0.5 rounded-md">
                    <Heart className="w-3.5 h-3.5 text-red-500 fill-current" />
                    <span>{pedroPicapiedraLikes}</span>
                  </div>
                </div>
                
                <p className="text-sm text-brand-brown/70 leading-relaxed">
                  El simpático personaje Pedro Picapiedra vuelve en una hermosa y nostálgica recreación amigurumi tejida totalmente a mano. Detallado con su icónico traje naranja con manchas negras y su inseparable corbata azul tejida. Ideal para coleccionistas, nostálgicos y amantes de las caricaturas clásicas de Hanna-Barbera.
                </p>

                {pedroPicapiedraClicks > 0 && (
                  <div className="flex items-center gap-1.5 text-xs text-brand-brown/50">
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>{pedroPicapiedraClicks} clientes han solicitado detalles de esta obra</span>
                  </div>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-brand-pink/10">
                <a
                  href={pedroPicapiedraWhatsappUrl}
                  onClick={handleTrackPedroPicapiedraClick}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-2 bg-brand-pink hover:bg-brand-pink/90 text-white font-bold py-3 px-4 rounded-full shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.557-5.343 11.897-11.953 11.897-2.006-.002-3.978-.507-5.742-1.466L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.852.002-2.632-1.023-5.105-2.887-6.97-1.864-1.865-4.343-2.89-6.978-2.892-5.441 0-9.865 4.421-9.869 9.852-.001 1.748.461 3.454 1.337 4.97L1.87 21.082l4.777-1.252a9.78 9.78 0 00.001.002z" />
                  </svg>
                  <span>Consultar por WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Tarjeta 13: Patricio Estrella */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.05 }}
            whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(244, 143, 177, 0.15)" }}
            className="bg-white rounded-3xl border border-brand-pink/20 hover:border-brand-pink/45 shadow-md hover:shadow-xl overflow-hidden transition-all duration-300 flex flex-col h-full"
          >
            {/* Imagen del Amigurumi */}
            <div className="relative aspect-[4/3] overflow-hidden bg-brand-bg">
              <ImageWithFallback
                candidates={patricioEstrellaCandidates}
                alt="Amigurumi Patricio Estrella"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover select-none"
              />
              <span className="absolute top-4 left-4 bg-brand-pink text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                Mediano
              </span>

              {/* Botón de Reacción Interactivo */}
              <button
                onClick={handleLikePatricioEstrella}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-white/95 backdrop-blur-xs shadow-md border border-brand-pink/10 hover:scale-110 active:scale-90 transition-all duration-300 cursor-pointer group"
                aria-label="Dar me gusta a Patricio Estrella"
              >
                <Heart
                  className={`w-4 h-4 transition-all duration-300 ${
                    hasLikedPatricioEstrella ? "text-red-500 fill-current scale-110" : "text-brand-pink group-hover:text-red-500"
                  }`}
                />
              </button>
            </div>

            {/* Detalles del Producto */}
            <div className="p-6 flex-grow flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-2xl font-bold text-brand-brown">
                    Patricio Estrella
                  </h3>
                  <div className="flex items-center gap-1 text-xs font-bold text-brand-brown/70 bg-brand-pink/10 px-2 py-0.5 rounded-md">
                    <Heart className="w-3.5 h-3.5 text-red-500 fill-current" />
                    <span>{patricioEstrellaLikes}</span>
                  </div>
                </div>
                
                <p className="text-sm text-brand-brown/70 leading-relaxed">
                  El carismático y despistado Patricio Estrella cobra vida en una adorable versión amigurumi tejida totalmente a mano con hilado suave premium. Con sus emblemáticos pantalones cortos verdes con flores púrpuras y sus bracitos extendidos listos para un cálido abrazo. Un compañero ideal para coleccionistas y fanáticos de Fondo de Bikini.
                </p>

                {patricioEstrellaClicks > 0 && (
                  <div className="flex items-center gap-1.5 text-xs text-brand-brown/50">
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>{patricioEstrellaClicks} clientes han solicitado detalles de esta obra</span>
                  </div>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-brand-pink/10">
                <a
                  href={patricioEstrellaWhatsappUrl}
                  onClick={handleTrackPatricioEstrellaClick}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-2 bg-brand-pink hover:bg-brand-pink/90 text-white font-bold py-3 px-4 rounded-full shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.557-5.343 11.897-11.953 11.897-2.006-.002-3.978-.507-5.742-1.466L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.852.002-2.632-1.023-5.105-2.887-6.97-1.864-1.865-4.343-2.89-6.978-2.892-5.441 0-9.865 4.421-9.869 9.852-.001 1.748.461 3.454 1.337 4.97L1.87 21.082l4.777-1.252a9.78 9.78 0 00.001.002z" />
                  </svg>
                  <span>Consultar por WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Tarjeta 14: Boo - Monster Inc. */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.1 }}
            whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(244, 143, 177, 0.15)" }}
            className="bg-white rounded-3xl border border-brand-pink/20 hover:border-brand-pink/45 shadow-md hover:shadow-xl overflow-hidden transition-all duration-300 flex flex-col h-full"
          >
            {/* Imagen del Amigurumi */}
            <div className="relative aspect-[4/3] overflow-hidden bg-brand-bg">
              <ImageWithFallback
                candidates={booCandidates}
                alt="Amigurumi Boo - Monsters Inc."
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover select-none"
              />
              <span className="absolute top-4 left-4 bg-brand-pink text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                Mediano
              </span>

              {/* Botón de Reacción Interactivo */}
              <button
                onClick={handleLikeBoo}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-white/95 backdrop-blur-xs shadow-md border border-brand-pink/10 hover:scale-110 active:scale-90 transition-all duration-300 cursor-pointer group"
                aria-label="Dar me gusta a Boo"
              >
                <Heart
                  className={`w-4 h-4 transition-all duration-300 ${
                    hasLikedBoo ? "text-red-500 fill-current scale-110" : "text-brand-pink group-hover:text-red-500"
                  }`}
                />
              </button>
            </div>

            {/* Detalles del Producto */}
            <div className="p-6 flex-grow flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-2xl font-bold text-brand-brown">
                    Boo - Monster Inc.
                  </h3>
                  <div className="flex items-center gap-1 text-xs font-bold text-brand-brown/70 bg-brand-pink/10 px-2 py-0.5 rounded-md">
                    <Heart className="w-3.5 h-3.5 text-red-500 fill-current" />
                    <span>{booLikes}</span>
                  </div>
                </div>
                
                <p className="text-sm text-brand-brown/70 leading-relaxed">
                  La carismática y tierna Boo cobra vida en esta hermosa versión amigurumi tejida totalmente a mano con hilado suave premium. Con su adorable camisón rosa oversized, sus clásicas coletas con lindos lazos lila y una dulce miradita que derretirá tu corazón. Un amiguito inolvidable de Fondo de Bikini o Fondo de Monstruópolis.
                </p>

                {booClicks > 0 && (
                  <div className="flex items-center gap-1.5 text-xs text-brand-brown/50">
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>{booClicks} clientes han solicitado detalles de esta obra</span>
                  </div>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-brand-pink/10">
                <a
                  href={booWhatsappUrl}
                  onClick={handleTrackBooClick}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-2 bg-brand-pink hover:bg-brand-pink/90 text-white font-bold py-3 px-4 rounded-full shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.557-5.343 11.897-11.953 11.897-2.006-.002-3.978-.507-5.742-1.466L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.852.002-2.632-1.023-5.105-2.887-6.97-1.864-1.865-4.343-2.89-6.978-2.892-5.441 0-9.865 4.421-9.869 9.852-.001 1.748.461 3.454 1.337 4.97L1.87 21.082l4.777-1.252a9.78 9.78 0 00.001.002z" />
                  </svg>
                  <span>Consultar por WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Tarjeta 15: Sullivan y Mike Wazowski */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.15 }}
            whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(244, 143, 177, 0.15)" }}
            className="bg-white rounded-3xl border border-brand-pink/20 hover:border-brand-pink/45 shadow-md hover:shadow-xl overflow-hidden transition-all duration-300 flex flex-col h-full"
            id="tarjeta-sullivan-mike"
          >
            {/* Imagen del Amigurumi */}
            <div className="relative aspect-[4/3] overflow-hidden bg-brand-bg">
              <ImageWithFallback
                candidates={sullivanMikeCandidates}
                alt="Amigurumi Sullivan y Mike Wazowski"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover select-none"
              />
              <span className="absolute top-4 left-4 bg-brand-pink text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                Edición Especial
              </span>

              {/* Botón de Reacción Interactivo */}
              <button
                onClick={handleLikeSullivanMike}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-white/95 backdrop-blur-xs shadow-md border border-brand-pink/10 hover:scale-110 active:scale-90 transition-all duration-300 cursor-pointer group"
                aria-label="Dar me gusta a Sullivan y Mike"
                id="btn-like-sullivan-mike"
              >
                <Heart
                  className={`w-4 h-4 transition-all duration-300 ${
                    hasLikedSullivanMike ? "text-red-500 fill-current scale-110" : "text-brand-pink group-hover:text-red-500"
                  }`}
                />
              </button>
            </div>

            {/* Detalles del Producto */}
            <div className="p-6 flex-grow flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-2xl font-bold text-brand-brown">
                    Sullivan y Mike Wazowski
                  </h3>
                  <div className="flex items-center gap-1 text-xs font-bold text-brand-brown/70 bg-brand-pink/10 px-2 py-0.5 rounded-md">
                    <Heart className="w-3.5 h-3.5 text-red-500 fill-current" />
                    <span>{sullivanMikeLikes}</span>
                  </div>
                </div>
                
                <p className="text-sm text-brand-brown/70 leading-relaxed">
                  La pareja más querida de Monstruopolis llega tejida a mano en un pack de edición especial premium. Sullivan, esponjoso, con sus adorables manchitas moradas y cuerpito súper suave; y Mike Wazowski, en su icónico tono verde lima con su gran ojito tejidito a mano de forma impecable. El set perfecto para llenar de magia y ternura cualquier rincón.
                </p>

                {sullivanMikeClicks > 0 && (
                  <div className="flex items-center gap-1.5 text-xs text-brand-brown/50">
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>{sullivanMikeClicks} clientes han solicitado detalles de esta obra</span>
                  </div>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-brand-pink/10">
                <a
                  href={sullivanMikeWhatsappUrl}
                  onClick={handleTrackSullivanMikeClick}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-2 bg-brand-pink hover:bg-brand-pink/90 text-white font-bold py-3 px-4 rounded-full shadow-sm hover:shadow-md transition-all duration-300"
                  id="btn-whatsapp-sullivan-mike"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.557-5.343 11.897-11.953 11.897-2.006-.002-3.978-.507-5.742-1.466L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.852.002-2.632-1.023-5.105-2.887-6.97-1.864-1.865-4.343-2.89-6.978-2.892-5.441 0-9.865 4.421-9.869 9.852-.001 1.748.461 3.454 1.337 4.97L1.87 21.082l4.777-1.252a9.78 9.78 0 00.001.002z" />
                  </svg>
                  <span>Consultar por WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Tarjeta 16: Snoopy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.20 }}
            whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(244, 143, 177, 0.15)" }}
            className="bg-white rounded-3xl border border-brand-pink/20 hover:border-brand-pink/45 shadow-md hover:shadow-xl overflow-hidden transition-all duration-300 flex flex-col h-full"
            id="tarjeta-snoopy"
          >
            {/* Imagen del Amigurumi */}
            <div className="relative aspect-[4/3] overflow-hidden bg-brand-bg">
              <ImageWithFallback
                candidates={snoopyCandidates}
                alt="Amigurumi Snoopy Aviador"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover select-none"
              />
              <span className="absolute top-4 left-4 bg-brand-pink text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                Mediano
              </span>

              {/* Botón de Reacción Interactivo */}
              <button
                onClick={handleLikeSnoopy}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-white/95 backdrop-blur-xs shadow-md border border-brand-pink/10 hover:scale-110 active:scale-90 transition-all duration-300 cursor-pointer group"
                aria-label="Dar me gusta a Snoopy"
                id="btn-like-snoopy"
              >
                <Heart
                  className={`w-4 h-4 transition-all duration-300 ${
                    hasLikedSnoopy ? "text-red-500 fill-current scale-110" : "text-brand-pink group-hover:text-red-500"
                  }`}
                />
              </button>
            </div>

            {/* Detalles del Producto */}
            <div className="p-6 flex-grow flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-2xl font-bold text-brand-brown">
                    Snoopy
                  </h3>
                  <div className="flex items-center gap-1 text-xs font-bold text-brand-brown/70 bg-brand-pink/10 px-2 py-0.5 rounded-md">
                    <Heart className="w-3.5 h-3.5 text-red-500 fill-current" />
                    <span>{snoopyLikes}</span>
                  </div>
                </div>
                
                <p className="text-sm text-brand-brown/70 leading-relaxed">
                  El perrito más querido del mundo de las historietas cobra vida como un adorable piloto aviador. Confeccionado a mano de manera artesanal y súper detallada en hilado tipo chenilla extra suave, Snoopy luce un abrigador gorrito de invierno color turquesa con sus clásicas gafas y bufanda marrón de piloto aviador, complementado con su icónico collar rojo. ¡Un clásico lleno de nostalgia, ternura y un gran espíritu soñador listo para decorar tu rincón favorito!
                </p>

                {snoopyClicks > 0 && (
                  <div className="flex items-center gap-1.5 text-xs text-brand-brown/50">
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>{snoopyClicks} clientes han solicitado detalles de esta obra</span>
                  </div>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-brand-pink/10">
                <a
                  href={snoopyWhatsappUrl}
                  onClick={handleTrackSnoopyClick}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-2 bg-brand-pink hover:bg-brand-pink/90 text-white font-bold py-3 px-4 rounded-full shadow-sm hover:shadow-md transition-all duration-300"
                  id="btn-whatsapp-snoopy"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.557-5.343 11.897-11.953 11.897-2.006-.002-3.978-.507-5.742-1.466L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.852.002-2.632-1.023-5.105-2.887-6.97-1.864-1.865-4.343-2.89-6.978-2.892-5.441 0-9.865 4.421-9.869 9.852-.001 1.748.461 3.454 1.337 4.97L1.87 21.082l4.777-1.252a9.78 9.78 0 00.001.002z" />
                  </svg>
                  <span>Consultar por WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Tarjeta 17: Grinch */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.25 }}
            whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(244, 143, 177, 0.15)" }}
            className="bg-white rounded-3xl border border-brand-pink/20 hover:border-brand-pink/45 shadow-md hover:shadow-xl overflow-hidden transition-all duration-300 flex flex-col h-full"
            id="tarjeta-grinch-ornament"
          >
            {/* Imagen del Amigurumi */}
            <div className="relative aspect-[4/3] overflow-hidden bg-brand-bg">
              <ImageWithFallback
                candidates={grinchOrnCandidates}
                alt="Amigurumi Grinch Adorno decorativo"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover select-none"
              />
              <span className="absolute top-4 left-4 bg-brand-pink text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                Mediano
              </span>

              {/* Botón de Reacción Interactivo */}
              <button
                onClick={handleLikeGrinchOrn}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-white/95 backdrop-blur-xs shadow-md border border-brand-pink/10 hover:scale-110 active:scale-90 transition-all duration-300 cursor-pointer group"
                aria-label="Dar me gusta al Grinch"
                id="btn-like-grinch-ornament"
              >
                <Heart
                  className={`w-4 h-4 transition-all duration-300 ${
                    hasLikedGrinchOrn ? "text-red-500 fill-current scale-110" : "text-brand-pink group-hover:text-red-500"
                  }`}
                />
              </button>
            </div>

            {/* Detalles del Producto */}
            <div className="p-6 flex-grow flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-2xl font-bold text-brand-brown">
                    Grinch
                  </h3>
                  <div className="flex items-center gap-1 text-xs font-bold text-brand-brown/70 bg-brand-pink/10 px-2 py-0.5 rounded-md">
                    <Heart className="w-3.5 h-3.5 text-red-500 fill-current" />
                    <span>{grinchOrnLikes}</span>
                  </div>
                </div>
                
                <p className="text-sm text-brand-brown/70 leading-relaxed">
                  Nuestro entrañable duendecillo gruñón se reinventa en esta preciosa versión artesanal. Elaborado de manera súper minuciosa con una textura acolchada, esponjosa y un tono verde limón radiante, resalta por su adorable mirada tejida a mano y su abrigadora bufanda tejida a rayas rojas y negras. ¡Una obra llena de nostalgia, picardía y encanto artesanal ideal para decorar y alegrar tus momentos favoritos del año!
                </p>

                {grinchOrnClicks > 0 && (
                  <div className="flex items-center gap-1.5 text-xs text-brand-brown/50">
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>{grinchOrnClicks} clientes han solicitado detalles de esta obra</span>
                  </div>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-brand-pink/10">
                <a
                  href={grinchOrnWhatsappUrl}
                  onClick={handleTrackGrinchOrnClick}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-2 bg-brand-pink hover:bg-brand-pink/90 text-white font-bold py-3 px-4 rounded-full shadow-sm hover:shadow-md transition-all duration-300"
                  id="btn-whatsapp-grinch-ornament"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.557-5.343 11.897-11.953 11.897-2.006-.002-3.978-.507-5.742-1.466L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.852.002-2.632-1.023-5.105-2.887-6.97-1.864-1.865-4.343-2.89-6.978-2.892-5.441 0-9.865 4.421-9.869 9.852-.001 1.748.461 3.454 1.337 4.97L1.87 21.082l4.777-1.252a9.78 9.78 0 00.001.002z" />
                  </svg>
                  <span>Consultar por WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Cajas en Blanco Premium */}
          {blankBoxes.map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: (index + 3) * 0.05 }}
              whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(244, 143, 177, 0.15)" }}
              className="bg-white rounded-3xl h-[472px] border border-brand-pink/15 hover:border-brand-pink/45 shadow-sm transition-all duration-300 relative flex items-center justify-center text-center px-4"
            >
              <div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-brand-pink/20" />
              <div className="absolute bottom-4 right-4 w-4 h-1 rounded-full bg-brand-cyan/25" />
              <span className="font-serif text-brand-pink/30 text-sm italic py-2">
                Próxima creación...
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
