
ESX = nil

Citizen.CreateThread(function()
    while ESX == nil do
        TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)
        Citizen.Wait(5000)
    end

    ESX.PlayerData = ESX.GetPlayerData()
end)



RegisterCommand("calculate", function()

    SendNUIMessage({
        action = "showui"

    })
    SetNuiFocus(true, true)
    
end)

RegisterNUICallback('close', function()
    SetNuiFocus(false, false)
end)