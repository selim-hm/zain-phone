import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Check, AlertCircle, ShoppingCart } from 'lucide-react';

export default function CompatibilityTool() {
  const { t } = useApp();
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const data = {
    apple: {
      name: t("brandApple"),
      models: [
        { id: "ip-15pm", name: "iPhone 15 Pro Max" },
        { id: "ip-15p", name: "iPhone 15 Pro" },
        { id: "ip-15", name: "iPhone 15" },
        { id: "ip-14pm", name: "iPhone 14 Pro Max" },
        { id: "ip-13", name: "iPhone 13" }
      ],
      fitData: {
        charger: {
          name: t("appleChargerName"),
          specs: t("appleChargerSpecs")
        },
        screen: {
          name: t("appleScreenName"),
          specs: t("appleScreenSpecs")
        },
        case: {
          name: t("appleCaseName"),
          specs: t("appleCaseSpecs")
        }
      }
    },
    samsung: {
      name: t("brandSamsung"),
      models: [
        { id: "s-24u", name: "Galaxy S24 Ultra" },
        { id: "s-23u", name: "Galaxy S23 Ultra" },
        { id: "s-23", name: "Galaxy S23" },
        { id: "a-55", name: "Galaxy A55 5G" }
      ],
      fitData: {
        charger: {
          name: t("samsungChargerName"),
          specs: t("samsungChargerSpecs")
        },
        screen: {
          name: t("samsungScreenName"),
          specs: t("samsungScreenSpecs")
        },
        case: {
          name: t("samsungCaseName"),
          specs: t("samsungCaseSpecs")
        }
      }
    },
    xiaomi: {
      name: t("brandXiaomi"),
      models: [
        { id: "x-14u", name: "Xiaomi 14 Ultra" },
        { id: "x-14", name: "Xiaomi 14" },
        { id: "redmi-13p", name: "Redmi Note 13 Pro 5G" }
      ],
      fitData: {
        charger: {
          name: t("xiaomiChargerName"),
          specs: t("xiaomiChargerSpecs")
        },
        screen: {
          name: t("xiaomiScreenName"),
          specs: t("xiaomiScreenSpecs")
        },
        case: {
          name: t("xiaomiCaseName"),
          specs: t("xiaomiCaseSpecs")
        }
      }
    },
    realme: {
      name: t("brandRealme"),
      models: [
        { id: "rm-12p", name: "Realme 12 Pro+ 5G" },
        { id: "rm-gt5", name: "Realme GT5" }
      ],
      fitData: {
        charger: {
          name: t("realmeChargerName"),
          specs: t("realmeChargerSpecs")
        },
        screen: {
          name: t("realmeScreenName"),
          specs: t("realmeScreenSpecs")
        },
        case: {
          name: t("realmeCaseName"),
          specs: t("realmeCaseSpecs")
        }
      }
    }
  };

  const handleBrandChange = (e) => {
    setSelectedBrand(e.target.value);
    setSelectedModel("");
    setResult(null);
  };

  const handleApply = (e) => {
    e.preventDefault();
    if (!selectedBrand || !selectedModel || !selectedType) {
      alert(t("phoneSelectPrompt"));
      return;
    }

    setLoading(true);
    setResult(null);

    // Simulate tech scan animations
    setTimeout(() => {
      const brandData = data[selectedBrand];
      const modelName = brandData.models.find(m => m.id === selectedModel)?.name;
      const fit = brandData.fitData[selectedType];
      
      setResult({
        modelName,
        accessoryName: fit.name,
        specs: fit.specs,
        type: selectedType
      });
      setLoading(false);
    }, 1200);
  };

  return (
    <section id="compatibility" className="py-20 md:py-28 bg-slate-50 dark:bg-zinc-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            {t("compTitle")}
          </h2>
          <div className="w-16 h-1 bg-slate-900 dark:bg-white mx-auto my-4 rounded-full"></div>
          <p className="text-slate-500 dark:text-zinc-400 text-base sm:text-lg">
            {t("compSubtitle")}
          </p>
        </div>

        {/* Checker Core Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Diagnostic Inputs (Col span 5) */}
          <form 
            onSubmit={handleApply} 
            className="lg:col-span-5 p-6 sm:p-8 rounded-3xl border bg-white dark:bg-zinc-900 border-slate-205/65 dark:border-zinc-800/80 shadow-lg flex flex-col gap-6"
          >
            {/* Select Brand */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-slate-500 dark:text-zinc-400 uppercase tracking-widest">
                {t("selectBrand")}
              </label>
              <select
                value={selectedBrand}
                onChange={handleBrandChange}
                className="w-full px-4 py-3 rounded-xl border bg-slate-50 border-slate-200/60 dark:bg-zinc-950 dark:border-zinc-800 text-slate-900 dark:text-white text-sm font-semibold focus:outline-none focus:border-slate-800 dark:focus:border-zinc-300 transition-colors"
                required
              >
                <option value="">-- {t("selectBrand")} --</option>
                {Object.keys(data).map(key => (
                  <option key={key} value={key}>{data[key].name}</option>
                ))}
              </select>
            </div>

            {/* Select Model */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-slate-500 dark:text-zinc-400 uppercase tracking-widest">
                {t("selectModel")}
              </label>
              <select
                value={selectedModel}
                onChange={(e) => setSelectedModel(e.target.value)}
                disabled={!selectedBrand}
                className="w-full px-4 py-3 rounded-xl border bg-slate-50 border-slate-200/60 dark:bg-zinc-950 dark:border-zinc-800 text-slate-900 dark:text-white text-sm font-semibold focus:outline-none focus:border-slate-800 dark:focus:border-zinc-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                required
              >
                <option value="">-- {t("selectModel")} --</option>
                {selectedBrand && data[selectedBrand].models.map(model => (
                  <option key={model.id} value={model.id}>{model.name}</option>
                ))}
              </select>
            </div>

            {/* Select Type */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-slate-500 dark:text-zinc-400 uppercase tracking-widest">
                {t("selectAccessory")}
              </label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border bg-slate-50 border-slate-200/60 dark:bg-zinc-950 dark:border-zinc-800 text-slate-900 dark:text-white text-sm font-semibold focus:outline-none focus:border-slate-800 dark:focus:border-zinc-300 transition-colors"
                required
              >
                <option value="">-- {t("selectAccessory")} --</option>
                <option value="charger">{t("typeCharger")}</option>
                <option value="screen">{t("typeScreen")}</option>
                <option value="case">{t("typeCase")}</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="mt-4 w-full py-4 rounded-xl text-sm font-bold uppercase tracking-wider bg-black hover:bg-neutral-800 dark:bg-white dark:hover:bg-zinc-100 text-white dark:text-black shadow-md transition-all active:scale-98 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-slate-400 border-t-white dark:border-zinc-500 dark:border-t-black rounded-full animate-spin"></div>
                  <span>{t("analyzingProfiles")}</span>
                </div>
              ) : (
                t("checkCompat")
              )}
            </button>
          </form>

          {/* Diagnostic Display Result (Col span 7) */}
          <div className="lg:col-span-7 w-full flex flex-col justify-center">
            {result ? (
              <div className="scale-up animate-in fade-in slide-in-from-bottom-5 duration-300 p-6 sm:p-8 rounded-3xl border bg-white dark:bg-zinc-900 border-slate-200 dark:border-zinc-800/80 dark:neon-glow-white shadow-xl">
                
                {/* Result header */}
                <div className="flex items-center gap-2 mb-4">
                  <Check className="w-5.5 h-5.5 text-emerald-500" />
                  <span className="text-xs font-bold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase">
                    {t("compatResult")}
                  </span>
                </div>

                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2">
                  {result.modelName} &rarr; <span className="text-slate-500 dark:text-zinc-400 capitalize">{t("type" + result.type.charAt(0).toUpperCase() + result.type.slice(1))}</span>
                </h3>

                {/* matched item */}
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-zinc-950 border border-slate-100 dark:border-zinc-800/60 mb-6">
                  <p className="text-xs font-bold text-slate-400 dark:text-zinc-500 uppercase mb-1">
                    {t("recommendedAccessories")}
                  </p>
                  <p className="text-base font-black text-slate-800 dark:text-white">
                    {result.accessoryName}
                  </p>
                </div>

                {/* details specs */}
                <div className="flex flex-col gap-2 mb-8">
                  <span className="text-xs font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-wider">
                    {t("recommendationTitle")}
                  </span>
                  <p className="text-sm font-semibold text-slate-600 dark:text-zinc-300 leading-relaxed">
                    {result.specs}
                  </p>
                  <p className="text-xs font-medium text-slate-500 dark:text-zinc-400 italic">
                    {t("recommendationContent")}
                  </p>
                </div>

                {/* Purchase buttons linking WhatsApp with model text */}
                <a
                  href={`https://wa.me/201146444105?text=${encodeURIComponent(t("whatsappQuick") + result.modelName + " (" + result.accessoryName + ")")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-4 rounded-xl text-sm font-bold uppercase tracking-wider bg-emerald-600 hover:bg-emerald-700 text-white shadow-md transition-all active:scale-98"
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span>{t("orderViaWhatsApp")}</span>
                </a>

              </div>
            ) : (
              <div className="p-8 border border-dashed rounded-3xl border-slate-350 dark:border-zinc-800/80 bg-slate-50/20 text-center flex flex-col items-center justify-center min-h-[300px]">
                <AlertCircle className="w-12 h-12 text-slate-400 dark:text-zinc-600 mb-4" />
                <h3 className="text-base font-extrabold text-slate-800 dark:text-zinc-300 mb-1">
                  {t("systemStandbyTitle")}
                </h3>
                <p className="text-xs text-slate-500 dark:text-zinc-500 max-w-sm">
                  {t("systemStandbyDesc")}
                </p>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
