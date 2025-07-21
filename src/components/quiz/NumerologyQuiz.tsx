import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";

const psychicMeanings: Record<number, string> = {
  1: "Born leader, confident, independent",
  2: "Sensitive, intuitive, emotional",
  3: "Creative, joyful, expressive",
  4: "Disciplined, reliable, hardworking",
  5: "Adventurous, freedom-loving, curious",
  6: "Nurturing, loving, responsible",
  7: "Spiritual, analytical, introspective",
  8: "Ambitious, powerful, goal-oriented",
  9: "Compassionate, wise, humanitarian",
};

const planetMap: Record<number, string> = {
  1: "Sun",
  2: "Moon",
  3: "Jupiter",
  4: "Rahu",
  5: "Mercury",
  6: "Venus",
  7: "Ketu",
  8: "Saturn",
  9: "Mars",
};

const elementMap: Record<string, string> = {
  Sun: "Fire",
  Moon: "Water",
  Jupiter: "Ether",
  Rahu: "Air",
  Mercury: "Earth",
  Venus: "Water",
  Ketu: "Fire",
  Saturn: "Earth",
  Mars: "Fire",
};

const comboMap: Record<string, { meaning: string; advice: string; strength: string; challenge: string; compatibility: number; famous: string; astroTip: string }> = {
  "2/1": {
    meaning: "A heart-led thinker with a fire to lead",
    advice: "Use your emotional depth (Moon) to guide your leadership (Sun). Lead with empathy.",
    strength: "Deeply intuitive leader",
    challenge: "Avoid mood swings; balance confidence with compassion",
    compatibility: 50,
    famous: "Oprah Winfrey",
    astroTip: "Balance your emotions with confidence. Practice grounding rituals under the moon."
  },
  "8/6": {
    meaning: "Power-driven nurturer — ambition meets love",
    advice: "Balance work and emotions. Lead with responsibility but don't suppress affection.",
    strength: "Strong-willed with a caring core",
    challenge: "Tendency to overwork and neglect emotional needs",
    compatibility: 90,
    famous: "Elon Musk",
    astroTip: "Harness Saturn’s discipline while embracing Venus’s charm. Burn sandalwood for balance."
  },
  "1/1": {
    meaning: "Combination of Sun and Sun energy.",
    advice: "Integrate Sun's traits into your dominant Sun path.",
    strength: "Strength from blending Sun and Sun qualities.",
    challenge: "Challenge in balancing Sun's nature with Sun.",
    compatibility: 70,
    famous: "To be determined",
    astroTip: "Harmonize Sun and Sun influences through daily reflection."
  },
  "1/2": {
    "meaning": "Combination of Sun and Moon energy.",
    "advice": "Integrate Moon's traits into your dominant Sun path.",
    "strength": "Strength from blending Sun and Moon qualities.",
    "challenge": "Challenge in balancing Sun's nature with Moon.",
    "compatibility": 80,
    "famous": "To be determined",
    "astroTip": "Harmonize Sun and Moon influences through daily reflection."
  },
  "1/3": {
    "meaning": "Combination of Sun and Jupiter energy.",
    "advice": "Integrate Jupiter's traits into your dominant Sun path.",
    "strength": "Strength from blending Sun and Jupiter qualities.",
    "challenge": "Challenge in balancing Sun's nature with Jupiter.",
    "compatibility": 90,
    "famous": "To be determined",
    "astroTip": "Harmonize Sun and Jupiter influences through daily reflection."
  },
  "1/4": {
    "meaning": "Combination of Sun and Rahu energy.",
    "advice": "Integrate Rahu's traits into your dominant Sun path.",
    "strength": "Strength from blending Sun and Rahu qualities.",
    "challenge": "Challenge in balancing Sun's nature with Rahu.",
    "compatibility": 50,
    "famous": "To be determined",
    "astroTip": "Harmonize Sun and Rahu influences through daily reflection."
  },
  "1/5": {
    "meaning": "Combination of Sun and Mercury energy.",
    "advice": "Integrate Mercury's traits into your dominant Sun path.",
    "strength": "Strength from blending Sun and Mercury qualities.",
    "challenge": "Challenge in balancing Sun's nature with Mercury.",
    "compatibility": 60,
    "famous": "To be determined",
    "astroTip": "Harmonize Sun and Mercury influences through daily reflection."
  },
  "1/6": {
    "meaning": "Combination of Sun and Venus energy.",
    "advice": "Integrate Venus's traits into your dominant Sun path.",
    "strength": "Strength from blending Sun and Venus qualities.",
    "challenge": "Challenge in balancing Sun's nature with Venus.",
    "compatibility": 70,
    "famous": "To be determined",
    "astroTip": "Harmonize Sun and Venus influences through daily reflection."
  },
  "1/7": {
    "meaning": "Combination of Sun and Ketu energy.",
    "advice": "Integrate Ketu's traits into your dominant Sun path.",
    "strength": "Strength from blending Sun and Ketu qualities.",
    "challenge": "Challenge in balancing Sun's nature with Ketu.",
    "compatibility": 80,
    "famous": "To be determined",
    "astroTip": "Harmonize Sun and Ketu influences through daily reflection."
  },
  "1/8": {
    "meaning": "Combination of Sun and Saturn energy.",
    "advice": "Integrate Saturn's traits into your dominant Sun path.",
    "strength": "Strength from blending Sun and Saturn qualities.",
    "challenge": "Challenge in balancing Sun's nature with Saturn.",
    "compatibility": 90,
    "famous": "To be determined",
    "astroTip": "Harmonize Sun and Saturn influences through daily reflection."
  },
  "1/9": {
    "meaning": "Combination of Sun and Mars energy.",
    "advice": "Integrate Mars's traits into your dominant Sun path.",
    "strength": "Strength from blending Sun and Mars qualities.",
    "challenge": "Challenge in balancing Sun's nature with Mars.",
    "compatibility": 50,
    "famous": "To be determined",
    "astroTip": "Harmonize Sun and Mars influences through daily reflection."
  },
  "2/2": {
    "meaning": "Combination of Moon and Moon energy.",
    "advice": "Integrate Moon's traits into your dominant Moon path.",
    "strength": "Strength from blending Moon and Moon qualities.",
    "challenge": "Challenge in balancing Moon's nature with Moon.",
    "compatibility": 90,
    "famous": "To be determined",
    "astroTip": "Harmonize Moon and Moon influences through daily reflection."
  },
  "2/3": {
    "meaning": "Combination of Moon and Jupiter energy.",
    "advice": "Integrate Jupiter's traits into your dominant Moon path.",
    "strength": "Strength from blending Moon and Jupiter qualities.",
    "challenge": "Challenge in balancing Moon's nature with Jupiter.",
    "compatibility": 50,
    "famous": "To be determined",
    "astroTip": "Harmonize Moon and Jupiter influences through daily reflection."
  },
  "2/4": {
    "meaning": "Combination of Moon and Rahu energy.",
    "advice": "Integrate Rahu's traits into your dominant Moon path.",
    "strength": "Strength from blending Moon and Rahu qualities.",
    "challenge": "Challenge in balancing Moon's nature with Rahu.",
    "compatibility": 60,
    "famous": "To be determined",
    "astroTip": "Harmonize Moon and Rahu influences through daily reflection."
  },
  "2/5": {
    "meaning": "Combination of Moon and Mercury energy.",
    "advice": "Integrate Mercury's traits into your dominant Moon path.",
    "strength": "Strength from blending Moon and Mercury qualities.",
    "challenge": "Challenge in balancing Moon's nature with Mercury.",
    "compatibility": 70,
    "famous": "To be determined",
    "astroTip": "Harmonize Moon and Mercury influences through daily reflection."
  },
  "2/6": {
    "meaning": "Combination of Moon and Venus energy.",
    "advice": "Integrate Venus's traits into your dominant Moon path.",
    "strength": "Strength from blending Moon and Venus qualities.",
    "challenge": "Challenge in balancing Moon's nature with Venus.",
    "compatibility": 80,
    "famous": "To be determined",
    "astroTip": "Harmonize Moon and Venus influences through daily reflection."
  },
  "2/7": {
    "meaning": "Combination of Moon and Ketu energy.",
    "advice": "Integrate Ketu's traits into your dominant Moon path.",
    "strength": "Strength from blending Moon and Ketu qualities.",
    "challenge": "Challenge in balancing Moon's nature with Ketu.",
    "compatibility": 90,
    "famous": "To be determined",
    "astroTip": "Harmonize Moon and Ketu influences through daily reflection."
  },
  "2/8": {
    "meaning": "Combination of Moon and Saturn energy.",
    "advice": "Integrate Saturn's traits into your dominant Moon path.",
    "strength": "Strength from blending Moon and Saturn qualities.",
    "challenge": "Challenge in balancing Moon's nature with Saturn.",
    "compatibility": 50,
    "famous": "To be determined",
    "astroTip": "Harmonize Moon and Saturn influences through daily reflection."
  },
  "2/9": {
    "meaning": "Combination of Moon and Mars energy.",
    "advice": "Integrate Mars's traits into your dominant Moon path.",
    "strength": "Strength from blending Moon and Mars qualities.",
    "challenge": "Challenge in balancing Moon's nature with Mars.",
    "compatibility": 60,
    "famous": "To be determined",
    "astroTip": "Harmonize Moon and Mars influences through daily reflection."
  },
  "3/1": {
    "meaning": "Combination of Jupiter and Sun energy.",
    "advice": "Integrate Sun's traits into your dominant Jupiter path.",
    "strength": "Strength from blending Jupiter and Sun qualities.",
    "challenge": "Challenge in balancing Jupiter's nature with Sun.",
    "compatibility": 90,
    "famous": "To be determined",
    "astroTip": "Harmonize Jupiter and Sun influences through daily reflection."
  },
  "3/2": {
    "meaning": "Combination of Jupiter and Moon energy.",
    "advice": "Integrate Moon's traits into your dominant Jupiter path.",
    "strength": "Strength from blending Jupiter and Moon qualities.",
    "challenge": "Challenge in balancing Jupiter's nature with Moon.",
    "compatibility": 50,
    "famous": "To be determined",
    "astroTip": "Harmonize Jupiter and Moon influences through daily reflection."
  },
  "3/3": {
    "meaning": "Combination of Jupiter and Jupiter energy.",
    "advice": "Integrate Jupiter's traits into your dominant Jupiter path.",
    "strength": "Strength from blending Jupiter and Jupiter qualities.",
    "challenge": "Challenge in balancing Jupiter's nature with Jupiter.",
    "compatibility": 60,
    "famous": "To be determined",
    "astroTip": "Harmonize Jupiter and Jupiter influences through daily reflection."
  },
  "3/4": {
    "meaning": "Combination of Jupiter and Rahu energy.",
    "advice": "Integrate Rahu's traits into your dominant Jupiter path.",
    "strength": "Strength from blending Jupiter and Rahu qualities.",
    "challenge": "Challenge in balancing Jupiter's nature with Rahu.",
    "compatibility": 70,
    "famous": "To be determined",
    "astroTip": "Harmonize Jupiter and Rahu influences through daily reflection."
  },
  "3/5": {
    "meaning": "Combination of Jupiter and Mercury energy.",
    "advice": "Integrate Mercury's traits into your dominant Jupiter path.",
    "strength": "Strength from blending Jupiter and Mercury qualities.",
    "challenge": "Challenge in balancing Jupiter's nature with Mercury.",
    "compatibility": 80,
    "famous": "To be determined",
    "astroTip": "Harmonize Jupiter and Mercury influences through daily reflection."
  },
  "3/6": {
    "meaning": "Combination of Jupiter and Venus energy.",
    "advice": "Integrate Venus's traits into your dominant Jupiter path.",
    "strength": "Strength from blending Jupiter and Venus qualities.",
    "challenge": "Challenge in balancing Jupiter's nature with Venus.",
    "compatibility": 90,
    "famous": "To be determined",
    "astroTip": "Harmonize Jupiter and Venus influences through daily reflection."
  },
  "3/7": {
    "meaning": "Combination of Jupiter and Ketu energy.",
    "advice": "Integrate Ketu's traits into your dominant Jupiter path.",
    "strength": "Strength from blending Jupiter and Ketu qualities.",
    "challenge": "Challenge in balancing Jupiter's nature with Ketu.",
    "compatibility": 50,
    "famous": "To be determined",
    "astroTip": "Harmonize Jupiter and Ketu influences through daily reflection."
  },
  "3/8": {
    "meaning": "Combination of Jupiter and Saturn energy.",
    "advice": "Integrate Saturn's traits into your dominant Jupiter path.",
    "strength": "Strength from blending Jupiter and Saturn qualities.",
    "challenge": "Challenge in balancing Jupiter's nature with Saturn.",
    "compatibility": 60,
    "famous": "To be determined",
    "astroTip": "Harmonize Jupiter and Saturn influences through daily reflection."
  },
  "3/9": {
    "meaning": "Combination of Jupiter and Mars energy.",
    "advice": "Integrate Mars's traits into your dominant Jupiter path.",
    "strength": "Strength from blending Jupiter and Mars qualities.",
    "challenge": "Challenge in balancing Jupiter's nature with Mars.",
    "compatibility": 70,
    "famous": "To be determined",
    "astroTip": "Harmonize Jupiter and Mars influences through daily reflection."
  },
  "4/1": {
    "meaning": "Combination of Rahu and Sun energy.",
    "advice": "Integrate Sun's traits into your dominant Rahu path.",
    "strength": "Strength from blending Rahu and Sun qualities.",
    "challenge": "Challenge in balancing Rahu's nature with Sun.",
    "compatibility": 50,
    "famous": "To be determined",
    "astroTip": "Harmonize Rahu and Sun influences through daily reflection."
  },
  "4/2": {
    "meaning": "Combination of Rahu and Moon energy.",
    "advice": "Integrate Moon's traits into your dominant Rahu path.",
    "strength": "Strength from blending Rahu and Moon qualities.",
    "challenge": "Challenge in balancing Rahu's nature with Moon.",
    "compatibility": 60,
    "famous": "To be determined",
    "astroTip": "Harmonize Rahu and Moon influences through daily reflection."
  },
  "4/3": {
    "meaning": "Combination of Rahu and Jupiter energy.",
    "advice": "Integrate Jupiter's traits into your dominant Rahu path.",
    "strength": "Strength from blending Rahu and Jupiter qualities.",
    "challenge": "Challenge in balancing Rahu's nature with Jupiter.",
    "compatibility": 70,
    "famous": "To be determined",
    "astroTip": "Harmonize Rahu and Jupiter influences through daily reflection."
  },
  "4/4": {
    "meaning": "Combination of Rahu and Rahu energy.",
    "advice": "Integrate Rahu's traits into your dominant Rahu path.",
    "strength": "Strength from blending Rahu and Rahu qualities.",
    "challenge": "Challenge in balancing Rahu's nature with Rahu.",
    "compatibility": 80,
    "famous": "To be determined",
    "astroTip": "Harmonize Rahu and Rahu influences through daily reflection."
  },
  "4/5": {
    "meaning": "Combination of Rahu and Mercury energy.",
    "advice": "Integrate Mercury's traits into your dominant Rahu path.",
    "strength": "Strength from blending Rahu and Mercury qualities.",
    "challenge": "Challenge in balancing Rahu's nature with Mercury.",
    "compatibility": 90,
    "famous": "To be determined",
    "astroTip": "Harmonize Rahu and Mercury influences through daily reflection."
  },
  "4/6": {
    "meaning": "Combination of Rahu and Venus energy.",
    "advice": "Integrate Venus's traits into your dominant Rahu path.",
    "strength": "Strength from blending Rahu and Venus qualities.",
    "challenge": "Challenge in balancing Rahu's nature with Venus.",
    "compatibility": 50,
    "famous": "To be determined",
    "astroTip": "Harmonize Rahu and Venus influences through daily reflection."
  },
  "4/7": {
    "meaning": "Combination of Rahu and Ketu energy.",
    "advice": "Integrate Ketu's traits into your dominant Rahu path.",
    "strength": "Strength from blending Rahu and Ketu qualities.",
    "challenge": "Challenge in balancing Rahu's nature with Ketu.",
    "compatibility": 60,
    "famous": "To be determined",
    "astroTip": "Harmonize Rahu and Ketu influences through daily reflection."
  },
  "4/8": {
    "meaning": "Combination of Rahu and Saturn energy.",
    "advice": "Integrate Saturn's traits into your dominant Rahu path.",
    "strength": "Strength from blending Rahu and Saturn qualities.",
    "challenge": "Challenge in balancing Rahu's nature with Saturn.",
    "compatibility": 70,
    "famous": "To be determined",
    "astroTip": "Harmonize Rahu and Saturn influences through daily reflection."
  },
  "4/9": {
    "meaning": "Combination of Rahu and Mars energy.",
    "advice": "Integrate Mars's traits into your dominant Rahu path.",
    "strength": "Strength from blending Rahu and Mars qualities.",
    "challenge": "Challenge in balancing Rahu's nature with Mars.",
    "compatibility": 80,
    "famous": "To be determined",
    "astroTip": "Harmonize Rahu and Mars influences through daily reflection."
  },
  "5/1": {
    "meaning": "Combination of Mercury and Sun energy.",
    "advice": "Integrate Sun's traits into your dominant Mercury path.",
    "strength": "Strength from blending Mercury and Sun qualities.",
    "challenge": "Challenge in balancing Mercury's nature with Sun.",
    "compatibility": 60,
    "famous": "To be determined",
    "astroTip": "Harmonize Mercury and Sun influences through daily reflection."
  },
  "5/2": {
    "meaning": "Combination of Mercury and Moon energy.",
    "advice": "Integrate Moon's traits into your dominant Mercury path.",
    "strength": "Strength from blending Mercury and Moon qualities.",
    "challenge": "Challenge in balancing Mercury's nature with Moon.",
    "compatibility": 70,
    "famous": "To be determined",
    "astroTip": "Harmonize Mercury and Moon influences through daily reflection."
  },
  "5/3": {
    "meaning": "Combination of Mercury and Jupiter energy.",
    "advice": "Integrate Jupiter's traits into your dominant Mercury path.",
    "strength": "Strength from blending Mercury and Jupiter qualities.",
    "challenge": "Challenge in balancing Mercury's nature with Jupiter.",
    "compatibility": 80,
    "famous": "To be determined",
    "astroTip": "Harmonize Mercury and Jupiter influences through daily reflection."
  },
  "5/4": {
    "meaning": "Combination of Mercury and Rahu energy.",
    "advice": "Integrate Rahu's traits into your dominant Mercury path.",
    "strength": "Strength from blending Mercury and Rahu qualities.",
    "challenge": "Challenge in balancing Mercury's nature with Rahu.",
    "compatibility": 90,
    "famous": "To be determined",
    "astroTip": "Harmonize Mercury and Rahu influences through daily reflection."
  },
  "5/5": {
    "meaning": "Combination of Mercury and Mercury energy.",
    "advice": "Integrate Mercury's traits into your dominant Mercury path.",
    "strength": "Strength from blending Mercury and Mercury qualities.",
    "challenge": "Challenge in balancing Mercury's nature with Mercury.",
    "compatibility": 50,
    "famous": "To be determined",
    "astroTip": "Harmonize Mercury and Mercury influences through daily reflection."
  },
  "5/6": {
    "meaning": "Combination of Mercury and Venus energy.",
    "advice": "Integrate Venus's traits into your dominant Mercury path.",
    "strength": "Strength from blending Mercury and Venus qualities.",
    "challenge": "Challenge in balancing Mercury's nature with Venus.",
    "compatibility": 60,
    "famous": "To be determined",
    "astroTip": "Harmonize Mercury and Venus influences through daily reflection."
  },
  "5/7": {
    "meaning": "Combination of Mercury and Ketu energy.",
    "advice": "Integrate Ketu's traits into your dominant Mercury path.",
    "strength": "Strength from blending Mercury and Ketu qualities.",
    "challenge": "Challenge in balancing Mercury's nature with Ketu.",
    "compatibility": 70,
    "famous": "To be determined",
    "astroTip": "Harmonize Mercury and Ketu influences through daily reflection."
  },
  "5/8": {
    "meaning": "Combination of Mercury and Saturn energy.",
    "advice": "Integrate Saturn's traits into your dominant Mercury path.",
    "strength": "Strength from blending Mercury and Saturn qualities.",
    "challenge": "Challenge in balancing Mercury's nature with Saturn.",
    "compatibility": 80,
    "famous": "To be determined",
    "astroTip": "Harmonize Mercury and Saturn influences through daily reflection."
  },
  "5/9": {
    "meaning": "Combination of Mercury and Mars energy.",
    "advice": "Integrate Mars's traits into your dominant Mercury path.",
    "strength": "Strength from blending Mercury and Mars qualities.",
    "challenge": "Challenge in balancing Mercury's nature with Mars.",
    "compatibility": 90,
    "famous": "To be determined",
    "astroTip": "Harmonize Mercury and Mars influences through daily reflection."
  },
  "6/1": {
    "meaning": "Combination of Venus and Sun energy.",
    "advice": "Integrate Sun's traits into your dominant Venus path.",
    "strength": "Strength from blending Venus and Sun qualities.",
    "challenge": "Challenge in balancing Venus's nature with Sun.",
    "compatibility": 70,
    "famous": "To be determined",
    "astroTip": "Harmonize Venus and Sun influences through daily reflection."
  },
  "6/2": {
    "meaning": "Combination of Venus and Moon energy.",
    "advice": "Integrate Moon's traits into your dominant Venus path.",
    "strength": "Strength from blending Venus and Moon qualities.",
    "challenge": "Challenge in balancing Venus's nature with Moon.",
    "compatibility": 80,
    "famous": "To be determined",
    "astroTip": "Harmonize Venus and Moon influences through daily reflection."
  },
  "6/3": {
    "meaning": "Combination of Venus and Jupiter energy.",
    "advice": "Integrate Jupiter's traits into your dominant Venus path.",
    "strength": "Strength from blending Venus and Jupiter qualities.",
    "challenge": "Challenge in balancing Venus's nature with Jupiter.",
    "compatibility": 90,
    "famous": "To be determined",
    "astroTip": "Harmonize Venus and Jupiter influences through daily reflection."
  },
  "6/4": {
    "meaning": "Combination of Venus and Rahu energy.",
    "advice": "Integrate Rahu's traits into your dominant Venus path.",
    "strength": "Strength from blending Venus and Rahu qualities.",
    "challenge": "Challenge in balancing Venus's nature with Rahu.",
    "compatibility": 50,
    "famous": "To be determined",
    "astroTip": "Harmonize Venus and Rahu influences through daily reflection."
  },
  "6/5": {
    "meaning": "Combination of Venus and Mercury energy.",
    "advice": "Integrate Mercury's traits into your dominant Venus path.",
    "strength": "Strength from blending Venus and Mercury qualities.",
    "challenge": "Challenge in balancing Venus's nature with Mercury.",
    "compatibility": 60,
    "famous": "To be determined",
    "astroTip": "Harmonize Venus and Mercury influences through daily reflection."
  },
  "6/6": {
    "meaning": "Combination of Venus and Venus energy.",
    "advice": "Integrate Venus's traits into your dominant Venus path.",
    "strength": "Strength from blending Venus and Venus qualities.",
    "challenge": "Challenge in balancing Venus's nature with Venus.",
    "compatibility": 70,
    "famous": "To be determined",
    "astroTip": "Harmonize Venus and Venus influences through daily reflection."
  },
  "6/7": {
    "meaning": "Combination of Venus and Ketu energy.",
    "advice": "Integrate Ketu's traits into your dominant Venus path.",
    "strength": "Strength from blending Venus and Ketu qualities.",
    "challenge": "Challenge in balancing Venus's nature with Ketu.",
    "compatibility": 80,
    "famous": "To be determined",
    "astroTip": "Harmonize Venus and Ketu influences through daily reflection."
  },
  "6/8": {
    "meaning": "Combination of Venus and Saturn energy.",
    "advice": "Integrate Saturn's traits into your dominant Venus path.",
    "strength": "Strength from blending Venus and Saturn qualities.",
    "challenge": "Challenge in balancing Venus's nature with Saturn.",
    "compatibility": 90,
    "famous": "To be determined",
    "astroTip": "Harmonize Venus and Saturn influences through daily reflection."
  },
  "6/9": {
    "meaning": "Combination of Venus and Mars energy.",
    "advice": "Integrate Mars's traits into your dominant Venus path.",
    "strength": "Strength from blending Venus and Mars qualities.",
    "challenge": "Challenge in balancing Venus's nature with Mars.",
    "compatibility": 50,
    "famous": "To be determined",
    "astroTip": "Harmonize Venus and Mars influences through daily reflection."
  },
  "7/1": {
    "meaning": "Combination of Ketu and Sun energy.",
    "advice": "Integrate Sun's traits into your dominant Ketu path.",
    "strength": "Strength from blending Ketu and Sun qualities.",
    "challenge": "Challenge in balancing Ketu's nature with Sun.",
    "compatibility": 80,
    "famous": "To be determined",
    "astroTip": "Harmonize Ketu and Sun influences through daily reflection."
  },
  "7/2": {
    "meaning": "Combination of Ketu and Moon energy.",
    "advice": "Integrate Moon's traits into your dominant Ketu path.",
    "strength": "Strength from blending Ketu and Moon qualities.",
    "challenge": "Challenge in balancing Ketu's nature with Moon.",
    "compatibility": 90,
    "famous": "To be determined",
    "astroTip": "Harmonize Ketu and Moon influences through daily reflection."
  },
  "7/3": {
    "meaning": "Combination of Ketu and Jupiter energy.",
    "advice": "Integrate Jupiter's traits into your dominant Ketu path.",
    "strength": "Strength from blending Ketu and Jupiter qualities.",
    "challenge": "Challenge in balancing Ketu's nature with Jupiter.",
    "compatibility": 50,
    "famous": "To be determined",
    "astroTip": "Harmonize Ketu and Jupiter influences through daily reflection."
  },
  "7/4": {
    "meaning": "Combination of Ketu and Rahu energy.",
    "advice": "Integrate Rahu's traits into your dominant Ketu path.",
    "strength": "Strength from blending Ketu and Rahu qualities.",
    "challenge": "Challenge in balancing Ketu's nature with Rahu.",
    "compatibility": 60,
    "famous": "To be determined",
    "astroTip": "Harmonize Ketu and Rahu influences through daily reflection."
  },
  "7/5": {
    "meaning": "Combination of Ketu and Mercury energy.",
    "advice": "Integrate Mercury's traits into your dominant Ketu path.",
    "strength": "Strength from blending Ketu and Mercury qualities.",
    "challenge": "Challenge in balancing Ketu's nature with Mercury.",
    "compatibility": 70,
    "famous": "To be determined",
    "astroTip": "Harmonize Ketu and Mercury influences through daily reflection."
  },
  "7/6": {
    "meaning": "Combination of Ketu and Venus energy.",
    "advice": "Integrate Venus's traits into your dominant Ketu path.",
    "strength": "Strength from blending Ketu and Venus qualities.",
    "challenge": "Challenge in balancing Ketu's nature with Venus.",
    "compatibility": 80,
    "famous": "To be determined",
    "astroTip": "Harmonize Ketu and Venus influences through daily reflection."
  },
  "7/7": {
    "meaning": "Combination of Ketu and Ketu energy.",
    "advice": "Integrate Ketu's traits into your dominant Ketu path.",
    "strength": "Strength from blending Ketu and Ketu qualities.",
    "challenge": "Challenge in balancing Ketu's nature with Ketu.",
    "compatibility": 90,
    "famous": "To be determined",
    "astroTip": "Harmonize Ketu and Ketu influences through daily reflection."
  },
  "7/8": {
    "meaning": "Combination of Ketu and Saturn energy.",
    "advice": "Integrate Saturn's traits into your dominant Ketu path.",
    "strength": "Strength from blending Ketu and Saturn qualities.",
    "challenge": "Challenge in balancing Ketu's nature with Saturn.",
    "compatibility": 50,
    "famous": "To be determined",
    "astroTip": "Harmonize Ketu and Saturn influences through daily reflection."
  },
  "7/9": {
    "meaning": "Combination of Ketu and Mars energy.",
    "advice": "Integrate Mars's traits into your dominant Ketu path.",
    "strength": "Strength from blending Ketu and Mars qualities.",
    "challenge": "Challenge in balancing Ketu's nature with Mars.",
    "compatibility": 60,
    "famous": "To be determined",
    "astroTip": "Harmonize Ketu and Mars influences through daily reflection."
  },
  "8/1": {
    "meaning": "Combination of Saturn and Sun energy.",
    "advice": "Integrate Sun's traits into your dominant Saturn path.",
    "strength": "Strength from blending Saturn and Sun qualities.",
    "challenge": "Challenge in balancing Saturn's nature with Sun.",
    "compatibility": 90,
    "famous": "To be determined",
    "astroTip": "Harmonize Saturn and Sun influences through daily reflection."
  },
  "8/2": {
    "meaning": "Combination of Saturn and Moon energy.",
    "advice": "Integrate Moon's traits into your dominant Saturn path.",
    "strength": "Strength from blending Saturn and Moon qualities.",
    "challenge": "Challenge in balancing Saturn's nature with Moon.",
    "compatibility": 50,
    "famous": "To be determined",
    "astroTip": "Harmonize Saturn and Moon influences through daily reflection."
  },
  "8/3": {
    "meaning": "Combination of Saturn and Jupiter energy.",
    "advice": "Integrate Jupiter's traits into your dominant Saturn path.",
    "strength": "Strength from blending Saturn and Jupiter qualities.",
    "challenge": "Challenge in balancing Saturn's nature with Jupiter.",
    "compatibility": 60,
    "famous": "To be determined",
    "astroTip": "Harmonize Saturn and Jupiter influences through daily reflection."
  },
  "8/4": {
    "meaning": "Combination of Saturn and Rahu energy.",
    "advice": "Integrate Rahu's traits into your dominant Saturn path.",
    "strength": "Strength from blending Saturn and Rahu qualities.",
    "challenge": "Challenge in balancing Saturn's nature with Rahu.",
    "compatibility": 70,
    "famous": "To be determined",
    "astroTip": "Harmonize Saturn and Rahu influences through daily reflection."
  },
  "8/5": {
    "meaning": "Combination of Saturn and Mercury energy.",
    "advice": "Integrate Mercury's traits into your dominant Saturn path.",
    "strength": "Strength from blending Saturn and Mercury qualities.",
    "challenge": "Challenge in balancing Saturn's nature with Mercury.",
    "compatibility": 80,
    "famous": "To be determined",
    "astroTip": "Harmonize Saturn and Mercury influences through daily reflection."
  },
  "8/7": {
    "meaning": "Combination of Saturn and Ketu energy.",
    "advice": "Integrate Ketu's traits into your dominant Saturn path.",
    "strength": "Strength from blending Saturn and Ketu qualities.",
    "challenge": "Challenge in balancing Saturn's nature with Ketu.",
    "compatibility": 50,
    "famous": "To be determined",
    "astroTip": "Harmonize Saturn and Ketu influences through daily reflection."
  },
  "8/8": {
    "meaning": "Combination of Saturn and Saturn energy.",
    "advice": "Integrate Saturn's traits into your dominant Saturn path.",
    "strength": "Strength from blending Saturn and Saturn qualities.",
    "challenge": "Challenge in balancing Saturn's nature with Saturn.",
    "compatibility": 60,
    "famous": "To be determined",
    "astroTip": "Harmonize Saturn and Saturn influences through daily reflection."
  },
  "8/9": {
    "meaning": "Combination of Saturn and Mars energy.",
    "advice": "Integrate Mars's traits into your dominant Saturn path.",
    "strength": "Strength from blending Saturn and Mars qualities.",
    "challenge": "Challenge in balancing Saturn's nature with Mars.",
    "compatibility": 70,
    "famous": "To be determined",
    "astroTip": "Harmonize Saturn and Mars influences through daily reflection."
  },
  "9/1": {
    "meaning": "Combination of Mars and Sun energy.",
    "advice": "Integrate Sun's traits into your dominant Mars path.",
    "strength": "Strength from blending Mars and Sun qualities.",
    "challenge": "Challenge in balancing Mars's nature with Sun.",
    "compatibility": 50,
    "famous": "To be determined",
    "astroTip": "Harmonize Mars and Sun influences through daily reflection."
  },
  "9/2": {
    "meaning": "Combination of Mars and Moon energy.",
    "advice": "Integrate Moon's traits into your dominant Mars path.",
    "strength": "Strength from blending Mars and Moon qualities.",
    "challenge": "Challenge in balancing Mars's nature with Moon.",
    "compatibility": 60,
    "famous": "To be determined",
    "astroTip": "Harmonize Mars and Moon influences through daily reflection."
  },
  "9/3": {
    "meaning": "Combination of Mars and Jupiter energy.",
    "advice": "Integrate Jupiter's traits into your dominant Mars path.",
    "strength": "Strength from blending Mars and Jupiter qualities.",
    "challenge": "Challenge in balancing Mars's nature with Jupiter.",
    "compatibility": 70,
    "famous": "To be determined",
    "astroTip": "Harmonize Mars and Jupiter influences through daily reflection."
  },
  "9/4": {
    "meaning": "Combination of Mars and Rahu energy.",
    "advice": "Integrate Rahu's traits into your dominant Mars path.",
    "strength": "Strength from blending Mars and Rahu qualities.",
    "challenge": "Challenge in balancing Mars's nature with Rahu.",
    "compatibility": 80,
    "famous": "To be determined",
    "astroTip": "Harmonize Mars and Rahu influences through daily reflection."
  },
  "9/5": {
    "meaning": "Combination of Mars and Mercury energy.",
    "advice": "Integrate Mercury's traits into your dominant Mars path.",
    "strength": "Strength from blending Mars and Mercury qualities.",
    "challenge": "Challenge in balancing Mars's nature with Mercury.",
    "compatibility": 90,
    "famous": "To be determined",
    "astroTip": "Harmonize Mars and Mercury influences through daily reflection."
  },
  "9/6": {
    "meaning": "Combination of Mars and Venus energy.",
    "advice": "Integrate Venus's traits into your dominant Mars path.",
    "strength": "Strength from blending Mars and Venus qualities.",
    "challenge": "Challenge in balancing Mars's nature with Venus.",
    "compatibility": 50,
    "famous": "To be determined",
    "astroTip": "Harmonize Mars and Venus influences through daily reflection."
  },
  "9/7": {
    "meaning": "Combination of Mars and Ketu energy.",
    "advice": "Integrate Ketu's traits into your dominant Mars path.",
    "strength": "Strength from blending Mars and Ketu qualities.",
    "challenge": "Challenge in balancing Mars's nature with Ketu.",
    "compatibility": 60,
    "famous": "To be determined",
    "astroTip": "Harmonize Mars and Ketu influences through daily reflection."
  },
  "9/8": {
    "meaning": "Combination of Mars and Saturn energy.",
    "advice": "Integrate Saturn's traits into your dominant Mars path.",
    "strength": "Strength from blending Mars and Saturn qualities.",
    "challenge": "Challenge in balancing Mars's nature with Saturn.",
    "compatibility": 70,
    "famous": "To be determined",
    "astroTip": "Harmonize Mars and Saturn influences through daily reflection."
  },
  "9/9": {
    "meaning": "Combination of Mars and Mars energy.",
    "advice": "Integrate Mars's traits into your dominant Mars path.",
    "strength": "Strength from blending Mars and Mars qualities.",
    "challenge": "Challenge in balancing Mars's nature with Mars.",
    "compatibility": 80,
    "famous": "To be determined",
    "astroTip": "Harmonize Mars and Mars influences through daily reflection."
  }
};

function calculateSumToSingleDigit(num: number): number {
  while (num > 9 && num !== 11 && num !== 22) {
    num = num.toString().split("").reduce((acc, digit) => acc + parseInt(digit), 0);
  }
  if (num === 11 || num === 22) {
    num = num.toString().split("").reduce((a, b) => parseInt(a) + parseInt(b), 0);
  }
  return num;
}

const QuizPage: React.FC = () => {
  const [form, setForm] = useState({ name: "", dob: "" });
  const [result, setResult] = useState<any>(null);

  const handleSubmit = () => {
    const [yyyy, mm, dd] = form.dob.split("-").map(Number);
    const age = new Date().getFullYear() - yyyy;

    const psychic = calculateSumToSingleDigit(dd);
    const lifePath = calculateSumToSingleDigit(dd + mm + yyyy);
    const comboKey = `${psychic}/${lifePath}`;
    const comboData = comboMap[comboKey] || {
      meaning: "Unique blend of energies",
      advice: "Balance both numbers to bring harmony.",
      strength: "Versatile personality",
      challenge: "May struggle to find alignment",
      compatibility: 60,
      famous: "Unknown",
      astroTip: "Stay aligned with both heart and logic."
    };

    const rulingNumber = age < 35 ? psychic : lifePath;
    const rulingPlanet = planetMap[rulingNumber];
    const rulingElement = elementMap[rulingPlanet];

    setResult({
      name: form.name,
      dob: form.dob,
      age,
      psychic,
      lifePath,
      comboKey,
      rulingNumber,
      rulingPlanet,
      rulingElement,
      psychicPlanet: planetMap[psychic],
      lifePathPlanet: planetMap[lifePath],
      psychicMeaning: psychicMeanings[psychic],
      lifePathMeaning: psychicMeanings[lifePath],
      ...comboData,
    });

    toast({ title: "✨ Your Numerology Report is Ready! ✨" });
  };

  const shareText = result
    ? `I'm a ${result.comboKey} in numerology — ${result.psychicPlanet} meets ${result.lifePathPlanet} energy. What's your combo?` +
      "\nDiscover yours at https://yourdomain.com/quiz"
    : "";

  return (
    <>
    
      <div className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-indigo-100 via-pink-100 to-yellow-100 text-center px-4">
        <motion.h1
          className="text-4xl md:text-5xl font-serif font-bold mb-2 bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-500 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          🔮 Discover Your Numerology Blueprint
        </motion.h1>
        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
          Enter your birth date and name to unveil your psychic traits, life path, and cosmic compatibility.
        </p>

        {!result && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="max-w-md mx-auto space-y-4"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg shadow-sm border border-purple-200 focus:ring-purple-300"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <input
              type="date"
              className="w-full px-4 py-3 rounded-lg shadow-sm border border-purple-200 focus:ring-purple-300"
              value={form.dob}
              onChange={(e) => setForm({ ...form, dob: e.target.value })}
            />
            <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white text-lg py-2" onClick={handleSubmit}>
              Calculate My Cosmic Numbers
            </Button>
          </motion.div>
        )}

        {!result && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-12 grid md:grid-cols-3 gap-6 text-center"
          >
            <div className="bg-white/60 backdrop-blur-sm p-5 rounded-lg shadow-md">
              <h3 className="font-medium text-purple-800 mb-2">Psychic Number</h3>
              <p className="text-gray-600 text-sm">Your core personality and talents.</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm p-5 rounded-lg shadow-md">
              <h3 className="font-medium text-purple-800 mb-2">Life Path Number</h3>
              <p className="text-gray-600 text-sm">Your destiny and soul’s journey.</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm p-5 rounded-lg shadow-md">
              <h3 className="font-medium text-purple-800 mb-2">Planetary Influences</h3>
              <p className="text-gray-600 text-sm">Celestial bodies guiding your essence.</p>
            </div>
          </motion.div>
        )}

        {result && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-10 max-w-3xl mx-auto text-left bg-white/80 backdrop-blur rounded-xl shadow-2xl p-6 space-y-6 border border-purple-200"
          >
            <h2 className="text-2xl font-bold text-purple-700">Numerology Report for {result.name}</h2>
            <p className="text-sm text-gray-500">DOB: {result.dob} • Age: {result.age}</p>
            <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded">
              <p><strong>Psychic Number:</strong> {result.psychic} ({result.psychicPlanet}) — {result.psychicMeaning}</p>
              <p><strong>Life Path Number:</strong> {result.lifePath} ({result.lifePathPlanet}) — {result.lifePathMeaning}</p>
            </div>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
              <p><strong>Combo:</strong> {result.comboKey} → {result.meaning}</p>
              <p><strong>Compatibility:</strong> {result.psychicPlanet} + {result.lifePathPlanet} = {result.compatibility}%</p>
            </div>
            <div className="bg-pink-50 border-l-4 border-pink-500 p-4 rounded">
              <p><strong>Advice:</strong> {result.advice}</p>
              <p><strong>Strength:</strong> {result.strength}</p>
              <p><strong>Challenge:</strong> {result.challenge}</p>
            </div>
            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded">
              <p><strong>Ruling Planet:</strong> {result.rulingPlanet}</p>
              <p><strong>Element:</strong> {result.rulingElement}</p>
              <p><strong>Famous Personality:</strong> {result.famous}</p>
              <p><strong>Astro Tip:</strong> {result.astroTip}</p>
            </div>
            <div className="mt-6">
              <Button
                className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-90 text-white text-lg"
                onClick={() => navigator.share?.({ title: "My Numerology Combo", text: shareText }) || navigator.clipboard.writeText(shareText)}
              >
                🔗 Share My Results
              </Button>
              <button
                className="mt-4 text-purple-600 underline text-sm"
                onClick={() => setResult(null)}
              >
                Take the quiz again
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </>
  );
};

export default QuizPage;
