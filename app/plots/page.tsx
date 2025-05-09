"use client";

import { BookingForm } from "@/components/form";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuthDetailsContext } from "@/contexts/authContext";
import { Info, MapPin, TreesIcon as Tree } from "lucide-react";
import { useState } from "react";

export default function PlotsPage() {
  const { plotsData, selectedPlot, setSelectedPlot } = useAuthDetailsContext();
  const [filter, setFilter] = useState("all");
  const [isBookingFormOpen, setIsBookingFormOpen] = useState(false);
  const openBookingForm = () => {
    setIsBookingFormOpen(true);
  };

  const closeBookingForm = () => {
    setIsBookingFormOpen(false);
  };

  const filteredPlots =
    plotsData && filter === "all"
      ? plotsData
      : filter === "available"
      ? plotsData && plotsData.filter((plot) => plot.status === "available")
      : plotsData && plotsData.filter((plot) => plot.status === "booked");
  return (
    <div className="container px-4 py-12 md:px-6 mx-auto">
      <div className="space-y-4 mb-8">
        <h1 className="text-3xl font-bold tracking-tighter md:text-4xl">
          Sandalwood Plantation Plots
        </h1>
        <p className="text-gray-500 md:text-xl">
          {`Browse our available plots and secure your investment in "Green Gold"`}
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3 lg:gap-12 mb-8">
        <Card className="col-span-full lg:col-span-2">
          <CardContent className="p-6">
            <div className="mb-4">
              <Tabs
                defaultValue="all"
                className="w-full"
                onValueChange={setFilter}
              >
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="all">All Plots</TabsTrigger>
                  <TabsTrigger value="available">Available</TabsTrigger>
                  <TabsTrigger value="booked">Booked</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {filteredPlots &&
                filteredPlots.map((plot) => (
                  <div
                    key={plot.id}
                    className={`relative border rounded-lg p-4 cursor-pointer transition-all ${
                      selectedPlot?.id === plot.id
                        ? "ring-2 ring-green-700"
                        : ""
                    }`}
                    onClick={() => setSelectedPlot(plot)}
                  >
                    <div className="flex flex-col items-center text-center">
                      <Tree
                        className={`h-8 w-8 mb-2 ${
                          plot?.status === "available"
                            ? "text-green-700"
                            : "text-gray-400"
                        }`}
                      />
                      <span className="font-medium">{plot.name}</span>
                      <span className="text-sm text-gray-500">{plot.size}</span>
                      <Badge
                        className={`mt-2 ${
                          plot.status === "available"
                            ? "bg-green-100 text-green-800 hover:bg-green-100"
                            : "bg-red-100 text-red-800 hover:bg-red-100"
                        }`}
                      >
                        {plot.status === "available" ? "Available" : "Booked"}
                      </Badge>
                    </div>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            {selectedPlot ? (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold">{selectedPlot?.name}</h3>
                  <Badge
                    className={
                      selectedPlot.status === "available"
                        ? "bg-green-100 text-green-800 hover:bg-green-100"
                        : "bg-red-100 text-red-800 hover:bg-red-100"
                    }
                  >
                    {selectedPlot.status === "available"
                      ? "Available"
                      : "Booked"}
                  </Badge>
                </div>

                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <MapPin className="h-5 w-5 text-green-700 mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-gray-500">
                        {selectedPlot.location}, Nandipadu Circle
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <Tree className="h-5 w-5 text-green-700 mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium">Plot Size</p>
                      <p className="text-gray-500">{selectedPlot.size}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <Info className="h-5 w-5 text-green-700 mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium">Investment</p>
                      <p className="text-gray-500">
                        ₹
                        {selectedPlot?.investment &&
                          selectedPlot?.investment.toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  {selectedPlot.status === "available" ? (
                    <Button
                      className="w-full bg-green-700 hover:bg-green-800"
                      onClick={openBookingForm}
                    >
                      Book This Plot
                    </Button>
                  ) : (
                    <Button className="w-full" variant="outline" disabled>
                      Already Booked
                    </Button>
                  )}
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full py-8 text-center">
                <Tree className="h-12 w-12 text-gray-300 mb-4" />
                <h3 className="text-lg font-medium">No Plot Selected</h3>
                <p className="text-gray-500 mt-1">
                  Click on a plot to view details
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
      {/* Booking Form Dialog */}
      {selectedPlot && (
        <BookingForm
          isOpen={isBookingFormOpen}
          onClose={closeBookingForm}
          plotNumber={selectedPlot.name}
          plotId={selectedPlot.id}
        />
      )}

      <div className="bg-green-50 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-bold mb-4">Investment Information</h2>
        <div className="space-y-4">
          <p>
            {`Each plot is 6 cents in size and priced at ₹4,99,999. Our sandalwood
            plantation offers a unique opportunity to invest in "Green Gold"
            with high returns over a 15-year growth period.`}
          </p>
          <p>
            The plots are located in our premium, fully gated plantation in
            Nandipadu Circle, Duttaluru Mandal, Nellore District. We provide
            secured fencing, expert maintenance, and complete legal
            transparency.
          </p>
          <div className="pt-2">
            <Button className="bg-green-700 hover:bg-green-800">
              Download Brochure
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
